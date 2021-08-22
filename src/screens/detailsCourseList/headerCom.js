import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationHelpers } from '../../utils'
import { icons } from '../../assets/icons'
import { IconCom, TextCom } from '../../components'
import { screenName } from '../../configs'

const { width } = Dimensions.get('window')
const rate = width / 375
const HeaderCom = ({ text }) => {
  const handleToBack = () => {
    NavigationHelpers.navigateToScreen(screenName.Search)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleToBack}
      >
        <IconCom source={icons.back} style={styles.icon} />
      </TouchableOpacity>

      <TextCom
        textSecondary
        headingMedium
        style={styles.text}
      >
        {text}
      </TextCom>
    </View>
  )
}

export default HeaderCom

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    width,
    height: 52 * rate,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginLeft: (width - 345 * rate) / 2,
  },
  text: {
    marginLeft: 20 * rate,
  },
})
