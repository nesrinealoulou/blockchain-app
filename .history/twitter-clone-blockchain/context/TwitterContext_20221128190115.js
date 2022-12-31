import { INSPECT_MAX_BYTES } from "buffer";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { client } from "../lib/client";
export const TwitterContext = createContext();
export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [tweets, setTweets] = useState([]);
  const router = useRouter();
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    if (!currentAccount || appStatus !== "connected") return;
    getCurrentUserDetails(currentAccount);
    fetchTweets();
  }, [currentAccount, appStatus]);

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus("noMetaMask");
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      console.log(addressArray[0], "length");
      if (addressArray.length > 0) {
        setAppStatus("connected");
        setCurrentAccount(addressArray[0]);
        createUserAccount(addressArray[0]);
      } else {
        router.push("/");
        setAppStatus("notConnected");
      }
    } catch (err) {
      router.push("/");
      setAppStatus("error");
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) return setAppStatus("noMetaMask");
    try {
      setAppStatus("loading");

      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (addressArray.length > 0) {
        setAppStatus("connected");
        setCurrentAccount(addressArray[0]);
        createUserAccount(addressArray[0]);
      } else {
        router.push("/");
        setAppStatus("notConnected");
      }
    } catch (err) {
      setAppStatus("error");
    }
  };
  /**
   * Creates an account in Sanity DB if the user does not already have one
   * @param {String} userAddress Wallet address of the currently logged in user
   */
  const createUserAccount = async (userAddress = currentAccount) => {
    if (!window.ethereum) return setAppStatus("noMetaMask");
    try {
      const userDoc = {
        _type: "users",
        _id: userAddress,
        name: "Unnamed",
        isProfileImageNft: false,
        profileImage:
          "https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg",
        walletAddress: userAddress,
      };

      await client.createIfNotExists(userDoc);

      setAppStatus("connected");
    } catch (error) {
      router.push("/");
      setAppStatus("error");
    }
  };
  const fetchTweets = async () => {
    const query = `
      *[_type == "tweets"]{
        "author": author->{name, walletAddress, profileImage, isProfileImageNft},
        tweet,
        timestamp
      }|order(timestamp desc)
    `;

    // setTweets(await client.fetch(query))

    const sanityResponse = await client.fetch(query);

    setTweets([]);
    sanityResponse.forEach(async (item) => {
      console.log("eeeeeeeeeee",item)
      if (item.author.isProfileImageNft) {
        const newItem = {
          
          tweet: item.tweet,
          timestamp: item.timestamp,
          author: {
            name: item.author.name,
            walletAddress: item.author.walletAddress,
            profileImage: items.author.profileImage,
            isProfileImageNft: item.author.isProfileImageNft,
          },
        };
        console.log('eeeee1111',item.tweet)

        setTweets((prevState) => [...prevState, newItem]);
      } else {
        setTweets((prevState) => [...prevState, item]);
      }
    });
  };
  /**
   * Gets the current user details from Sanity DB.
   * @param {String} userAccount Wallet address of the currently logged in user
   * @returns null
   */
  const getCurrentUserDetails = async (userAccount = currentAccount) => {
    if (appStatus !== "connected") return;

    const query = `
      *[_type == "users" && _id == "${userAccount}"]{
        "tweets": tweets[]->{timestamp, tweet}|order(timestamp desc),
        name,
        profileImage,
        isProfileImageNft,
        coverImage,
        walletAddress
      }
    `;
    const response = await client.fetch(query);
    setCurrentUser({
      tweets: response[0].tweets,
      name: response[0].name,
      profileImage: response[0].profileImage,
      walletAddress: response[0].walletAddress,
      coverImage: response[0].coverImage,
      isProfileImageNft: response[0].isProfileImageNft,
    });
  };

  return (
    <TwitterContext.Provider
      value={{
        appStatus,
        currentAccount,
        connectWallet,
        tweets,
        fetchTweets,
        currentUser,
        getCurrentUserDetails,
      }}
    >
      {children}
    </TwitterContext.Provider>
  );
};
