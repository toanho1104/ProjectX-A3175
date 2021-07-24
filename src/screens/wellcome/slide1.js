import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'

import { BackGroundView, TextCom } from '../../components/index'
import { images } from '../../assets/images'

const { width } = Dimensions.get('window')
const rate = width / 375
const Slide1 = () => {
  console.log('Slide1')
  return (
    <BackGroundView>
      <View style={styles.imageView}>
        <LottieView
          source={images.hello}
          autoPlay
          loop
          style={styles.image}
        />
      </View>
      <TextCom
        headingLarge
      >
        xin chao
      </TextCom>
    </BackGroundView>
  )
}

export default Slide1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageView: {
    marginTop: 50 * rate,
  },
  image: {
    width: 150 * rate,
    height: 150 * rate,
    // borderWidth: 1,

  },
})
