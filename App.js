import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
                                                                                                                                                                                                                                                                                                                 
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('Você não selecionou nenhuma imagem');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label='Choose a photo' theme = 'primary' onPress={pickImageAsync} />
        <Button label='Use this photo' />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#25292e', 
    alignItems: 'center' 
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58, 
  },
  texto: {
    color: '#fff',
    fontSize: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }
});
