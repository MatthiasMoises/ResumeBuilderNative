import { ScrollView, Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { getLocales } from 'expo-localization'

import { i18n } from '../helpers/TranslationKeys'
import Header from '../components/ui/Header'
import UserImagePicker from '../components/UserImagePicker'
import { useStorage } from '../hooks/useStorage'
import RoundedButton from '../components/ui/RoundedButton'

i18n.locale = getLocales()[0].languageCode

const ResumeForm = ({ navigation }) => {
  const { userData, handleUpdateUserData, handleStoreUserData, handleRemoveUserData } = useStorage()

  const handleInputChange = (e, field) => {
    handleUpdateUserData(e, field)
  }

  const storeUserData = async () => {
    handleStoreUserData(userData)
    navigation.navigate('ShowResume')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingBottom: 75 }}>
        <Header headline={i18n.t('resumeFormHeadline')} />

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlinePersonalDetails')}</Text>
          <TextInput
            style={styles.textinput}
            placeholder={i18n.t('enterFullName')}
            value={userData.fullName}
            onChangeText={(e) => handleInputChange(e, 'fullName')}
          />

          <UserImagePicker
            i18n={i18n}
            currentImage={userData.imageUrl}
            onUpdateImage={(e) => handleInputChange(e, 'imageUrl')}
          />

          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterProfessionalTitle')}
            value={userData.profTitle}
            onChangeText={(e) => handleInputChange(e, 'profTitle')}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlineContactDetails')}</Text>
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterPhoneNumber')}
            value={userData.phoneNo}
            onChangeText={(e) => handleInputChange(e, 'phoneNo')}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterEmail')}
            value={userData.email}
            onChangeText={(e) => handleInputChange(e, 'email')}
          />
          <TextInput
            style={styles.textinput}
            placeholder={i18n.t('enterWebsiteLink')}
            value={userData.website}
            onChangeText={(e) => handleInputChange(e, 'website')}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlinePreviousJob')}</Text>
          <TextInput
            style={styles.textinput}
            placeholder={i18n.t('enterCompanyName')}
            value={userData.company}
            onChangeText={(e) => handleInputChange(e, 'company')}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterJobTitle')}
            value={userData.jobTitle}
            onChangeText={(e) => handleInputChange(e, 'jobTitle')}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterJobStartDate')}
            value={userData.jobStartDate}
            onChangeText={(e) => handleInputChange(e, 'jobStartDate')}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterJobEndDate')}
            value={userData.jobEndDate}
            onChangeText={(e) => handleInputChange(e, 'jobEndDate')}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterExperience')}
            value={userData.experience}
            onChangeText={(e) => handleInputChange(e, 'experience')}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlineProfileDetails')}</Text>
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterProfileSummary')}
            value={userData.profSummary}
            onChangeText={(e) => handleInputChange(e, 'profSummary')}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterCertificate')}
            value={userData.certificate}
            onChangeText={(e) => handleInputChange(e, 'certificate')}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterCollegeName')}
            value={userData.collegeName}
            onChangeText={(e) => handleInputChange(e, 'collegeName')}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterCollegeStartDate')}
            value={userData.colStartDate}
            onChangeText={(e) => handleInputChange(e, 'colStartDate')}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterCollegeEndDate')}
            value={userData.colEndDate}
            onChangeText={(e) => handleInputChange(e, 'colEndDate')}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterBestSkill')}
            value={userData.skill}
            onChangeText={(e) => handleInputChange(e, 'skill')}
          />
          <TextInput style={styles.textinput}
            placeholder={i18n.t('enterHobby')}
            value={userData.hobby}
            onChangeText={(e) => handleInputChange(e, 'hobby')}
          />
        </View>
        <View>
          <RoundedButton
            title={i18n.t('createResume')}
            color="#397006"
            handlePress={() => storeUserData()}
          />
          <RoundedButton
            title={i18n.t('deleteData')}
            color="#700639"
            handlePress={() => handleRemoveUserData()}
          />
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
  }
})

export default ResumeForm