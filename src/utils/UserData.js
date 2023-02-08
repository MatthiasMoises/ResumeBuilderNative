import AsyncStorage from '@react-native-async-storage/async-storage'
import { settings } from '../config/settings'
import { showCustomAlert } from '../helpers/CustomAlert'

const initialUserDetails = {
  fullName: '',
  imageUrl: '',
  profTitle: '',
  phoneNo: '',
  email: '',
  website: '',
  company: '',
  jobTitle: '',
  jobStartDate: '',
  jobEndDate: '',
  experience: '',
  profSummary: '',
  certificate: '',
  collegeName: '',
  colStartDate: '',
  colEndDate: '',
  skill: '',
  hobby: ''
}

export const loadUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(settings.storageKey)
    const storageUserDetails = jsonValue != null ? JSON.parse(jsonValue) : null

    return storageUserDetails ?? initialUserDetails
  } catch (e) {
    showCustomAlert('Error', e.message)
  }
}

export const storeUserData = async (userData) => {
  try {
    const jsonValue = JSON.stringify(userData)
    await AsyncStorage.setItem(settings.storageKey, jsonValue)
  } catch (e) {
    showCustomAlert('Error', e.message)
  }
}

export const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem(settings.storageKey)
    return initialUserDetails
  } catch (e) {
    showCustomAlert('Error', e.message)
  }
}
