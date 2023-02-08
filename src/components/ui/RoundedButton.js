import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const RoundedButton = ({ title, color, handlePress }) => {
  if (!color.includes('#')) {
    color = `#${color}`
  }

  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: color }}
      onPress={handlePress}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default RoundedButton

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  title: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'stretch',
    textAlign: 'center',
  }
})
