import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'

const { width } = Dimensions.get('window')
const rate = width / 375
const BorderLine = () => {
  const theme = useSelector((state) => state.storage.theme)
  return (
    <View style={[styles.container, { borderColor: theme.iconPrimary }]} />
  )
}

export default BorderLine

const styles = StyleSheet.create({
  container: {
    width: 345 * rate,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    marginVertical: 7,
  },
})
