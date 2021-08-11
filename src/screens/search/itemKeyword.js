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
const ItemKeyWord = ({ item }) => {
  const theme = useSelector((state) => state.storage.theme)

  return (
    <View style={[styles.container, { backgroundColor: theme?.backgroundSecondary }]}>
      <TextCom
        textPrimary
        contenTextRegular
      >
        {item?.title}
      </TextCom>
    </View>
  )
}

export default ItemKeyWord

const styles = StyleSheet.create({
  container: {
    marginRight: 10 * rate,
    backgroundColor: 'red',
    paddingHorizontal: 10 * rate,
    paddingVertical: 5 * rate,
    borderRadius: 12,
    marginTop: 10,
  },
})
