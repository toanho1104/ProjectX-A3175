import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IconCom, TextCom } from '../../components'
import { icons } from '../../assets/icons'

const { width } = Dimensions.get('window')
const rate = width / 375
const ItemOption = ({ text, source, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconCom source={source} />
        <TextCom
          textPrimary
          buttonTextNomarl
          style={{ marginLeft: 10 }}
        >
          {text}
        </TextCom>
      </View>
      <IconCom source={icons.next} />
    </TouchableOpacity>
  )
}

export default ItemOption

const styles = StyleSheet.create({
  container: {
    width: 345 * rate,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
})
