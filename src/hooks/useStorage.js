import { useState, useEffect } from "react"
import { loadUserData, storeUserData, removeUserData } from "../utils/UserData"

export const useStorage = () => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    handleLoadUserData()
  }, [])

  const handleLoadUserData = async () => {
    const storedUserData = await loadUserData()
    setUserData(storedUserData)
  }

  const handleUpdateUserData = (e, field) => {
    setUserData((prev) => ({
      ...prev,
      [field]: e
    }))
  }

  const handleStoreUserData = async (data) => {
    await storeUserData(data)
  }

  const handleRemoveUserData = async () => {
    await removeUserData()
  }

  return {
    userData,
    handleUpdateUserData,
    handleStoreUserData,
    handleRemoveUserData
  }
}
