import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'

import { BackGroundView } from '../../components/index'
import { images } from '../../assets/images'

const { width } = Dimensions.get('window')
const rate = width / 375
const Slide1 = () => {
  return (
    <BackGroundView>
      <View style={{ width: 400, height: 400 }}>
        <FastImage
          source={images.hello}
          style={{ height: 200, width: 200 }}
        />
        {/* <LottieView
          source={images.unlocked}
          autoPlay
          loop
          style={styles.image}
        /> */}
      </View>

    </BackGroundView>
  )
}

export default Slide1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
})
