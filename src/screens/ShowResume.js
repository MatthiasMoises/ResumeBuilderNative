import { ScrollView, Text, View, Image, StyleSheet, Button } from 'react-native'
import { getLocales } from 'expo-localization'
import * as Print from 'expo-print'
import { shareAsync } from 'expo-sharing'

import { i18n } from '../helpers/TranslationKeys'
import Header from '../components/ui/Header'
import { generateHtml } from '../helpers/PdfDocument'
import { useStorage } from '../hooks/useStorage'

i18n.locale = getLocales()[0].languageCode

const ShowResume = () => {
  const { userData } = useStorage()

  const createPdf = async () => {
    try {
      const html = await generateHtml(userData)

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
            source={{ uri: userData.imageUrl }}
            style={{ width: 80, height: 80 }}
          />
          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('name')}: </Text>
            <Text>{userData.fullName}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('professionalTitle')}: </Text>
            <Text>{userData.fullName}</Text>
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlineContactDetails')}</Text>
          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('phoneNumber')}: </Text>
            <Text>{userData.phoneNo}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('email')}: </Text>
            <Text>{userData.email}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('websiteLink')}: </Text>
            <Text>{userData.website}</Text>
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlineContactDetails')}</Text>
          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('company')}: </Text>
            <Text>{userData.company}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('role')}: </Text>
            <Text>{userData.jobTitle}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('startAndEndDates')}: </Text>
            <Text>{userData.jobStartDate} - {userData.jobEndDate}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('jobExperience')}: </Text>
            <Text>{userData.experience}</Text>
          </Text>
        </View>

        <View style={styles.details}>
          <Text style={styles.titleText}>{i18n.t('headlineProfileDetails')}</Text>
          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('profileSummary')}: </Text>
            <Text>{userData.profSummary}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('certificate')}: </Text>
            <Text>{userData.certificate}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('collegeName')}: </Text>
            <Text>{userData.collegeName}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('startAndEndDates')}: </Text>
            <Text>{userData.colStartDate} - {userData.colEndDate}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('skill')}: </Text>
            <Text>{userData.skill}</Text>
          </Text>

          <Text style={styles.text}>
            <Text style={styles.key}>{i18n.t('hobby')}: </Text>
            <Text>{userData.hobby}</Text>
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
