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
import { icons } from '../../assets/icons'

const { width } = Dimensions.get('window')
const rate = width / 375
const Slide3 = () => {
  console.log('Slide3')
  return (
    <BackGroundView>
      <View style={styles.imageView}>
        <LottieView
          source={images.unlocked}
          autoPlay
          loop={false}
          style={styles.image}
        />
      </View>
      <TextCom
        headingMedium
      >
        Tạo tài khoản đăng nhập để mở khóa đầy đủ tính năng của ứng dụng
      </TextCom>
      <ViewConten
        icon={icons.check}
        text="xin choa"
      />
    </BackGroundView>
  )
}
const ViewConten = ({ icon, text }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <FastImage
        source={icon}
        style={{ width: 30, height: 30 }}
      />
      <TextCom
        headingSmall
      >
        {text}
      </TextCom>
    </View>
  )
}

export default Slide3

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
