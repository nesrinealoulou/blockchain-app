import React from "react";
import Post from '../Post'
const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};
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
const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            
              `${tweet.userName.slice(
                  0,
                  4
                )}...${tweet.userName.slice(41)}`
              
          }
          text={tweet.text}
          avatar={tweet.avatar}
          timestamp={tweet.timestamp}
          isProfileImageNft={tweet.isProfileImageNft}
        />
      ))}
    </div>
  );
};
export default ProfileTweets;
