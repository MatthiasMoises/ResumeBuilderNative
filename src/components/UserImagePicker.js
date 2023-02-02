import React, { useEffect, useState } from 'react'
import { Button, Image, View, StyleSheet, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

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
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onUpdateImage(result.assets[0].uri)
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Button title={i18n.t('pickImage')} onPress={pickImage} />
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginBottom: 15,
  }
})

export default UserImagePicker
