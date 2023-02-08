import React, { useEffect, useState } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import RoundedButton from './ui/RoundedButton'

const UserImagePicker = ({ i18n, currentImage, onUpdateImage }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (currentImage !== '' && currentImage !== null) {
      setImage(currentImage)
    }
  }, [currentImage])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: false,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onUpdateImage(result.assets[0].uri)
    }
  }

  return (
    <View>
      <RoundedButton
        title={i18n.t('pickImage')}
        color="#2596be"
        handlePress={() => pickImage()}
      />
      <View style={styles.imageContainer}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  }
})

export default UserImagePicker
