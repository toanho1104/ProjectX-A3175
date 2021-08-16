import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, Linking,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { BackGroundView, HeaderCom } from '../../components'
import ItemOp from './ItemOp'
import { icons } from '../../assets/icons'

const { width } = Dimensions.get('window')
const rate = width / 375
const Contact = () => {
  const language = useSelector((state) => state.storage.language)
  const sendMail = () => {
    Linking.openURL('mailto:toanho1104@gmail.com?subject=Trợ giúp &body=')
    // Linking.openURL('https://www.youtube.com/')
    // // Linking.openURL('tel:0336222456')
  }
  const linkYouTube = () => {
    Linking.openURL('https://www.youtube.com/toanho1104/')
  }
  return (
    <BackGroundView>
      <HeaderCom text={language?.contact} />
      <ItemOp title="Gmail" content="toanho1104@gmail.com" icon={icons.gmail} onPress={sendMail} />
      <ItemOp title="Youtube" content="yt/toanho1104" icon={icons.youtube} onPress={linkYouTube} />

    </BackGroundView>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
