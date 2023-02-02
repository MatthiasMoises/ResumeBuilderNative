import ResumeForm from "./src/screens/ResumeForm"
import ShowResume from "./src/screens/ShowResume"
import { i18n } from "./src/helpers/TranslationKeys"

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { getLocales } from 'expo-localization'

i18n.locale = getLocales()[0].languageCode

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Resume"
          component={ResumeForm}
          options={{ title: i18n.t('resumeFormScreenHeadline') }}
        />

        <Stack.Screen
          name="ShowResume"
          component={ShowResume}
          options={{ title: i18n.t('showResumeScreenHeadline') }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
