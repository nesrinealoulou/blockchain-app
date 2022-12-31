import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import {client} from '../lib/client'
export const TwitterContext = createContext();
export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  const router = useRouter();
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

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
      } else {
        router.push("/");
        setAppStatus("notConnected");
      }
    } catch (err) {
      setAppStatus("error");
    }
  }
  const createUserAccount = async (userAddress = currentAccount) => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const userDoc = {}
       
      }catch (error) {
        router.push('/')
        setAppStatus('error')
      }
    }
  }

  return (
    <TwitterContext.Provider
      value={{
        appStatus,
        currentAccount,
        connectWallet,
      }}
    >
      {children}
    </TwitterContext.Provider>
  );
};
