import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet,
  TouchableOpacity, Alert, Image, BackHandler,
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
  const theme = useSelector((state) => state.storage.theme)
  // const backAction = () => {
  //   Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => null,
  //       style: 'cancel',
  //     },
  //     { text: 'YES', onPress: () => BackHandler.exitApp() },
  //   ])
  //   return true
  // }

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', backAction)

  //   return () => BackHandler.removeEventListener('hardwareBackPress', backAction)
  // }, [])

  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundPrimary }}>
      <Swiper
        style={{ backgroundColor: theme.backgroundPrimary }}
        loop={false}
        scrollEnabled
        dot={
          <View style={{
            backgroundColor: '#757575',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }}
          />
        }
        activeDot={<View style={{
          backgroundColor: '#19227C',
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
        />}
      >
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
  wrapper: {
  },
})
