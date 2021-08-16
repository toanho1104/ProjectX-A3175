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
const AvatarView = ({ source, name }) => {
  const theme = useSelector((state) => state.storage.theme)
  return (
    <View style={styles.container}>
      <FastImage
        source={source}
        style={[styles.image, { borderColor: theme?.iconPrimary }]}
      />
      <TextCom
        headingLarge
        textPrimary
        style={{ marginTop: 10 }}
      >
        {name}
      </TextCom>
    </View>
  )
}

export default AvatarView

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 30 * rate,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,

  },
})
