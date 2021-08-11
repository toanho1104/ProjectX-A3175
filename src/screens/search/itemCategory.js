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
const ItemCategory = ({ item }) => {
  const { name, imageUrl } = item
  return (
    <View style={styles.container}>
      <View style={styles.viewG}>
        <FastImage
          source={{ uri: imageUrl }}
          style={styles.image}
        />
        <TextCom
          style={styles.text}
          textPrimary
          contenTextRegular
        >
          {name}
        </TextCom>
      </View>
      <View>
        <IconCom source={icons.next} />
      </View>
    </View>
  )
}

export default ItemCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    width: 345 * rate,
    paddingVertical: 5,
    justifyContent: 'space-between',

  },
  image: {
    width: 30 * rate,
    height: 30 * rate,

  },
  viewG: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  },
})
