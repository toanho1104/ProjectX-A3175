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
const Slide2 = () => {
  return (
    <BackGroundView>
      <Text>aaaa</Text>
      {/* <LottieView
        source={images.unlocked}
        autoPlay
        loop
        style={styles.image}
      /> */}
    </BackGroundView>
  )
}

export default Slide2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
