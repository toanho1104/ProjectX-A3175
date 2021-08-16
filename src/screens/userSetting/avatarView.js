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
const AvatarView = ({ source, onPress }) => {
  const theme = useSelector((state) => state.storage.theme)
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <FastImage
        source={source}
        style={[styles.image, { borderColor: theme?.iconPrimary }]}
      />
      <View style={{
        position: 'absolute',
        bottom: 3 * rate,
        right: 3 * rate,
        padding: 5 * rate,
        backgroundColor: theme.backgroundSecondary,
        borderRadius: 20,
      }}
      >
        <IconCom
          source={icons.camera}
          style={{ width: 20 * rate, height: 20 * rate }}
        />
      </View>
    </TouchableOpacity>
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
