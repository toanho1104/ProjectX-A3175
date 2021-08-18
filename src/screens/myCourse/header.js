import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TextCom } from '../../components'

const { width } = Dimensions.get('window')
const rate = width / 375
const Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <TextCom
        textPrimary
        headingSmall
        style={{ opacity: 0.5, marginLeft: 24 * rate }}
      >
        {text}
      </TextCom>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 52 * rate,
    // borderWidth: 1,
    width,
    justifyContent: 'center',
  },
})
