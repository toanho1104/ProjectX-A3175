import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, BackHandler,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { BackGroundView } from '../../../components'

const { width } = Dimensions.get('window')
const rate = width / 375
const LoginScreen = () => {
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
    <BackGroundView style={styles.container}>
      <Text>login</Text>
    </BackGroundView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
})
