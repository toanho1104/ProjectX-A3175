import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import * as Animatable from 'react-native-animatable'
import { BackGroundView, TextCom } from '../../components/index'
import { images } from '../../assets/images'
import { icons } from '../../assets/icons'

const { width } = Dimensions.get('window')
const rate = width / 375
const Slide3 = () => {
  console.log('Slide3')
  const language = useSelector((state) => state.storage.language)
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
        textPrimary
      >
        {language.slide3Title}
      </TextCom>
      <View style={{ height: 30 * rate }} />
      <ViewConten
        icon={icons.check}
        text={language.slide3Content1}
      />
      <ViewConten
        icon={icons.check}
        text={language.slide3Content2}
      />
    </BackGroundView>
  )
}
const ViewConten = ({ icon, text }) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      width: 300 * rate,
      marginTop: 20 * rate,
    }}
    >
      <FastImage
        source={icon}
        style={{ width: 25 * rate, height: 25 * rate }}
      />
      <TextCom
        style={{ marginLeft: 10 * rate }}
        headingSmall
        textPrimary
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
