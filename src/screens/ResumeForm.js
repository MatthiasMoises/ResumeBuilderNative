import { useState, useEffect } from 'react'
import { ScrollView, Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getLocales } from 'expo-localization'

import { settings } from '../config/settings'
import { i18n } from '../helpers/TranslationKeys'
import Header from '../components/ui/Header'
import UserImagePicker from '../components/UserImagePicker'
import { showCustomAlert } from '../helpers/CustomAlert'

i18n.locale = getLocales()[0].languageCode

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

const ResumeForm = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({ ...initialUserDetails })

  useEffect(() => {
    getUserDetails()
  }, [])

  const getUserDetails = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(settings.storageKey)
      const storageUserDetails = jsonValue != null ? JSON.parse(jsonValue) : null

      if (storageUserDetails) {
        setUserDetails(storageUserDetails)
      }
    } catch (e) {
      showCustomAlert('Error', e.message)
    }
  }

  const storeUserDetails = async () => {
    try {
      const jsonValue = JSON.stringify(userDetails)
      await AsyncStorage.setItem(settings.storageKey, jsonValue)
      navigateToResumePage()
    } catch (e) {
      showCustomAlert('Error', e.message)
    }
  }

  const removeUserDetails = async () => {
    try {
      await AsyncStorage.removeItem(settings.storageKey)
      setUserDetails({ ...initialUserDetails })
    } catch (e) {
      showCustomAlert('Error', e.message)
    }
  }

  const navigateToResumePage = () => {
    navigation.navigate('ShowResume')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingBottom: 100 }}>
        <Header headline={i18n.t('resumeFormHeadline')} />

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlinePersonalDetails')}</Text>
          <TextInput
            style={styles.textinput}
            placeholder={i18n.t('enterFullName')}
            value={userDetails.fullName}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'fullName': e }
              }))
            }}
          />

          <UserImagePicker i18n={i18n} currentImage={userDetails.imageUrl} onUpdateImage={(e) => {
            setUserDetails(userDetails => ({
              ...userDetails, ...{ 'imageUrl': e }
            }))
          }} />

          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterProfessionalTitle')}
            value={userDetails.profTitle}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'profTitle': e }
              }))
            }}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlineContactDetails')}</Text>
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterPhoneNumber')}
            value={userDetails.phoneNo}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'phoneNo': e }
              }))
            }}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterEmail')}
            value={userDetails.email}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'email': e }
              }))
            }}
          />
          <TextInput
            style={styles.textinput}
            placeholder={i18n.t('enterWebsiteLink')}
            value={userDetails.website}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'website': e }
              }))
            }}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlinePreviousJob')}</Text>
          <TextInput
            style={styles.textinput}
            placeholder={i18n.t('enterCompanyName')}
            value={userDetails.company}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'company': e }
              }))
            }}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterJobTitle')}
            value={userDetails.jobTitle}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'jobTitle': e }
              }))
            }}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterJobStartDate')}
            value={userDetails.jobStartDate}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'jobStartDate': e }
              }))
            }}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterJobEndDate')}
            value={userDetails.jobEndDate}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'jobEndDate': e }
              }))
            }}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterExperience')}
            value={userDetails.experience}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'experience': e }
              }))
            }}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlineProfileDetails')}</Text>
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterProfileSummary')}
            value={userDetails.profSummary}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'profSummary': e }
              }))
            }}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterCertificate')}
            value={userDetails.certificate}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'certificate': e }
              }))
            }}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterCollegeName')}
            value={userDetails.collegeName}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'collegeName': e }
              }))
            }}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterCollegeStartDate')}
            value={userDetails.colStartDate}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'colStartDate': e }
              }))
            }}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterCollegeEndDate')}
            value={userDetails.colEndDate}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'colEndDate': e }
              }))
            }}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterBestSkill')}
            value={userDetails.skill}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'skill': e }
              }))
            }}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterHobby')}
            value={userDetails.hobby}
            onChangeText={(e) => {
              setUserDetails(userDetails => ({
                ...userDetails, ...{ 'hobby': e }
              }))
            }}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Button
              title={i18n.t('createResume')}
              style={styles.button}
              color="#397006"
              onPress={() => storeUserDetails()}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Button
              title={i18n.t('deleteData')}
              style={styles.button}
              color="#700639"
              onPress={() => removeUserDetails()}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#063970',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40
  },
  details: {
    marginBottom: 15
  },
  titleText: {
    fontWeight: 'bold',
    color: 'yellow',
    fontSize: 15,
    marginBottom: 10
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    color: '#d3d3d3',
    marginBottom: 20,
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 15,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10
  }
})

export default ResumeForm