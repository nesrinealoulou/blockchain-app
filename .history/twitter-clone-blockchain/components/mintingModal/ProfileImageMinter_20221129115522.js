import React, { useState } from "react";
import { useState, useContext } from 'react'
import { TwitterContext } from '../../../context/TwitterContext'
const profileImageMinter = () => {
    const { currentAccount, setAppStatus } = useContext(TwitterContext)
  const router = useRouter()
     const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('initial')
  const [profileImage, setProfileImage] = useState<File>()
  const [isOpen, setIsOpen] = useState("initial");
  const renderLogic = (modalStatus = status) => {
    switch (modalStatus) {
      case 'initial':
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
        )

      case 'loading':
        return <LoadingState />

      case 'finished':
        return <FinishedState />

      default:
        router.push('/')
        setAppStatus('error')
        break
    }
  }

  return <>{renderLogic()}</>
}

export default ProfileImageMinter