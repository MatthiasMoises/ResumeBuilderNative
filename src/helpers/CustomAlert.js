import { Alert } from 'react-native'

export const showCustomAlert = (title, message) => {
  Alert.alert(title, message, [
    { text: 'OK', onPress: () => { } },
  ])
}
