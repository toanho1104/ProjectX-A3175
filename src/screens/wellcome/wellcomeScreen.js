import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import Swiper from 'react-native-swiper'
import Slide1 from './slide1'
import Slide2 from './slide2'
import Slide3 from './slide3'
import BotViewButton from './botViewButton'

const { width } = Dimensions.get('window')
const rate = width / 375
const WellcomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Swiper style={styles.wrapper} loop={false} scrollEnabled>
        <Slide1 />
        <Slide2 />
        <Slide3 />
      </Swiper>
      <BotViewButton />

    </View>
  )
}

export default WellcomeScreen
const styles = StyleSheet.create({
  wrapper: {},

  botView: {
    height: 50 * rate,
    flexDirection: 'row',
  },
})
