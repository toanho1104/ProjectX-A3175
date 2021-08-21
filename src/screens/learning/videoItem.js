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
const VideoItem = ({ item }) => {
  const { name } = item
  return (
    <View style={styles.container}>
      <TextCom
        textPrimary
        contenTextItalic
      >
        {name}
      </TextCom>
    </View>
  )
}

export default VideoItem

const styles = StyleSheet.create({
  container: {
    height: 30 * rate,
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: 320 * rate,
    // borderWidth: 1,
    alignSelf: 'center',
  },
})
