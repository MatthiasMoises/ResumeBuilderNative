import { View, Text, StyleSheet } from "react-native"
import PropTypes from 'prop-types'

const Header = ({ headline }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {headline}
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    alignSelf: 'stretch'
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    borderBottomColor: '#199187',
    paddingBottom: 10,
    borderBottomWidth: 1
  }
})

Header.propTypes = {
  headline: PropTypes.string.isRequired
}
