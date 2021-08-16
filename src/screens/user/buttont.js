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
const Button = ({ text, onPress }) => {
  const token = useSelector((state) => state.storage.token)
  const theme = useSelector((state) => state.storage.theme)
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: !token ? theme.primary : 'red',
        width: 150 * rate,
        height: 52 * rate,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,

      }}
    >
      <TextCom
        textOnPrimary
        buttonTextBold
      >
        {text}
      </TextCom>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
