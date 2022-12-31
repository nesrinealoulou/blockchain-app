import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { TwitterContext } from "../../../context/TwitterContext";
import LoadingState from './LoadingState'
import FinishedState from './FinishedState'
import InitialState from "./initialState";
import { pinJSONToIPFS, pinFileToIPFS } from '../../../lib/pinata'
const profileImageMinter = () => {
  const { currentAccount, setAppStatus } = useContext(TwitterContext);
  const router = useRouter()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("initial");
  const [profileImage, setProfileImage] = useState();
  const mint = async () => {
    const pinataMetaData = {
      name: `${name} - ${description}`,
      setStatus('loading')
    }
    const ipfsImageHash = await pinFileToIPFS(profileImage, pinataMetaData)
  } 
  const renderLogic = (modalStatus = status) => {
    switch (modalStatus) {
      case "initial":
        return (
          <InitialState
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            mint={mint}
          />
        );

      case "loading":
        return <LoadingState />;

      case "finished":
        return <FinishedState />;

      default:
        router.push("/");
        setAppStatus("error");
        break;
    }
  };

  return <>{renderLogic()}</>;
};

export default profileImageMinter;
