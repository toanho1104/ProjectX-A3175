import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { icons } from '../../assets/icons'
import { colors, fonts } from '../../assets/styles'
import { TextCom } from '../../components'

const { width } = Dimensions.get('window')
const rate = width / 375
const ItemOp = ({
  title, onPress, icon, content,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <FastImage
        source={icon}
        style={styles.icon}
        tintColor={colors.mainIcon}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.view}>
        <TextCom
          textPrimary
          contenTextBold
        >
          {title}
        </TextCom>
        <TextCom
          textPrimary
          contenTextItalic
        >
          {content}
        </TextCom>
      </View>
      <FastImage
        source={icons.next}
        style={{ width: 20 * rate, height: 20 * rate }}
        tintColor={colors.mainIcon}
      />
    </TouchableOpacity>
  )
}

export default ItemOp

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 345 * rate,
    // borderWidth: 1,
    // height: 44 * rate,
    paddingVertical: 6 * rate,
    flexDirection: 'row',

  },
  icon: {
    width: 42 * rate,
    height: 30 * rate,
  },
  view: {
    paddingHorizontal: 12 * rate,
    flex: 1,
  },

})
