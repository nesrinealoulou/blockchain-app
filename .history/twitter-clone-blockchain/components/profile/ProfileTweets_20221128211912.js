import React, { useContext } from "react";
import { TwitterContext } from "../../context/TwitterContext";
import Post from "../Post";
const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const ProfileTweets = () => {
  const { currentAccount, currentUser } = useContext(TwitterContext);
  return (
    <div className={style.wrapper}>
      {currentUser.tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={currentUser.name === 'Unnamed' ? currentUser.walletAddress: currentUser.name}
          userName={`${currentAccount.slice(0, 4)}...${currentAccount.slice(
            41
          )}`}
          text={tweet.tweet}
          avatar={tweet.avatar}
          timestamp={tweet.timestamp}
          isProfileImageNft={tweet.isProfileImageNft}
        />
      ))}
    </div>
  );
};
export default ProfileTweets;
