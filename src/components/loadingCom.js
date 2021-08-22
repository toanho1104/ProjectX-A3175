import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, Modal,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import { images } from '../assets/images'

const { width } = Dimensions.get('window')
const rate = width / 375
const LoadingCom = ({ isShow }) => {
  return (
    <Modal
      visible={isShow}
      transparent
    >
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

      }}
      >
        <LottieView
          source={images.load}
          autoPlay
          loop
          style={styles.image}
        />
      </View>
    </Modal>
  )
}

export default LoadingCom

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 190 * rate,
    height: 190 * rate,
    // borderWidth: 1,
    // marginBottom: -25 * rate,

  },
})
