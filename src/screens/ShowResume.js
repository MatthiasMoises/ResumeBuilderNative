import { useState, useEffect } from 'react'
import { ScrollView, Text, View, Image, StyleSheet, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getLocales } from 'expo-localization'
import * as Print from 'expo-print'
import { shareAsync } from 'expo-sharing'

import { settings } from '../config/settings'
import { i18n } from '../helpers/TranslationKeys'
import Header from '../components/ui/Header'
import { showCustomAlert } from '../helpers/CustomAlert'
import { generateHtml } from '../helpers/PdfDocument'

i18n.locale = getLocales()[0].languageCode

const ShowResume = () => {
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    getUserDetails()
  }, [])

  const getUserDetails = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(settings.storageKey)
      const storageUserDetails = jsonValue != null ? JSON.parse(jsonValue) : null

      if (storageUserDetails) {
        setUserDetails({ ...storageUserDetails })
      }
    } catch (e) {
      showCustomAlert('Error', e.message)
    }
  }

  const createPdf = async () => {
    try {
      const html = await generateHtml(userDetails)

      const { uri } = await Print.printToFileAsync({ html })
      await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' })
    } catch (e) {
      // showCustomAlert('Info', 'Print canceled')
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingBottom: 100 }}>
        <Header headline={i18n.t('showResumeHeadline')} />

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlinePersonalDetails')}</Text>
          <Image
            source={{ uri: userDetails.imageUrl }}
            style={{ width: 80, height: 80 }}
          />
          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('name')}: </Text>
            <Text>{userDetails.fullName}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('professionalTitle')}: </Text>
            <Text>{userDetails.fullName}</Text>
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlineContactDetails')}</Text>
          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('phoneNumber')}: </Text>
            <Text>{userDetails.phoneNo}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('email')}: </Text>
            <Text>{userDetails.email}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('websiteLink')}: </Text>
            <Text>{userDetails.website}</Text>
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlineContactDetails')}</Text>
          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('company')}: </Text>
            <Text>{userDetails.company}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('role')}: </Text>
            <Text>{userDetails.jobTitle}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('startAndEndDates')}: </Text>
            <Text>{userDetails.jobStartDate} - {userDetails.jobEndDate}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('jobExperience')}: </Text>
            <Text>{userDetails.experience}</Text>
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlineProfileDetails')}</Text>
          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('profileSummary')}: </Text>
            <Text>{userDetails.profSummary}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('certificate')}: </Text>
            <Text>{userDetails.certificate}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('collegeName')}: </Text>
            <Text>{userDetails.collegeName}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('startAndEndDates')}: </Text>
            <Text>{userDetails.colStartDate} - {userDetails.colEndDate}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('skill')}: </Text>
            <Text>{userDetails.skill}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('hobby')}: </Text>
            <Text>{userDetails.hobby}</Text>
          </Text>
        </View>
        <View>
          <Button
            title={i18n.t('createPdf')}
            style={styles.button}
            color="#397006"
            onPress={() => createPdf()}
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
  key: {
    fontWeight: 'bold'
  },
  text: {
    color: '#d3d3d3',
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 15,
  }
})

export default ShowResume
