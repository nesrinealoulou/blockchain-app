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
  
function Feed() {
  const { currentAccount, currentUser } = useContext(TwitterContext);
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