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
const HeaderTitle = ({ text }) => {
  const language = useSelector((state) => state.storage.language)

  return (
    <View style={styles.container}>
      <TextCom
        textPrimary
        headingMedium
      >
        {text}
      </TextCom>
      <TextCom
        style={styles.seeMoreText}
        textPrimary
        linkTextNomarl
      >
        {language.seeMore}
      </TextCom>
    </View>
  )
}

export default HeaderTitle

const styles = StyleSheet.create({
  container: {
    width: 345 * rate,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  seeMoreText: {
    opacity: 0.6,
  },
})
