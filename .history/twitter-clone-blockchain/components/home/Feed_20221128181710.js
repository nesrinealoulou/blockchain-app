import { BsStars } from "react-icons/bs";
import Post from "../Post";
import TweetBox from "./TweetBox";
import { useContext } from "react";
import { TwitterContext } from "../../context/TwitterContext";

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] `,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }
const tweets = [
  {
    displayName: "Qazi",
    userName: "0xcD1450BC6E247010bf1e24943dEf872b5A083327",
    avatar:
      "https://publish.one37pm.net/wp-content/uploads/2021/02/how-to-buy-a-cryptopunk_0001_03.jpg?fit=750%2C500",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
  {
    displayName: "Qazi",
    userName: "0xcD1450BC6E247010bf1e24943dEf872b5A083327",
    avatar:
      "https://publish.one37pm.net/wp-content/uploads/2021/02/how-to-buy-a-cryptopunk_0001_03.jpg?fit=750%2C500",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
  {
    displayName: "Qazi",
    userName: "0xcD1450BC6E247010bf1e24943dEf872b5A083327",
    avatar:
      "https://publish.one37pm.net/wp-content/uploads/2021/02/how-to-buy-a-cryptopunk_0001_03.jpg?fit=750%2C500",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2022-06-01T12:00:00.000Z",
  },
  {
    displayName: "Qazi",
    userName: "0xcD1450BC6E247010bf1e24943dEf872b5A083327",
    avatar:
      "https://publish.one37pm.net/wp-content/uploads/2021/02/how-to-buy-a-cryptopunk_0001_03.jpg?fit=750%2C500",
    text: "gm",
    isProfileImageNft: true,
    timestamp: "2021-06-01T12:00:00.000Z",
  },
  {
    displayName: "Qazi",
    userName: "0xcD1450BC6E247010bf1e24943dEf872b5A083327",
    avatar:
      "https://publish.one37pm.net/wp-content/uploads/2021/02/how-to-buy-a-cryptopunk_0001_03.jpg?fit=750%2C500",
    text: "gm",
    isProfileImageNft: true,
    timestamp: "2021-06-01T12:00:00.000Z",
  },
];
function Feed() {
    return (
        <div className={`${style.wrapper} no-scrollbar`}>
          <div className={style.header}>
            <div className={style.headerTitle}>Home</div>
            <BsStars />
          </div>
          <TweetBox />
          {tweets.map((tweet, index) => (
            <Post
              key={index}
              displayName={tweet.displayName}
              userName={`${tweet.author.walletAddress.slice(
                0,
                4,
              )}...${tweet.author.walletAddress.slice(41)}`}
              avatar={tweet.avatar}
              text={tweet.text}
              isProfileImageNft={tweet.isProfileImageNft}
              timestamp={tweet.timestamp}
            />
          ))}
        </div>
      )
    }
    
    export default Feed