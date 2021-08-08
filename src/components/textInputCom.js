import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import IconCom from './iconCom'
import { icons } from '../assets/icons'

const { width } = Dimensions.get('window')
const rate = width / 375
const TextInputCom = ({ string, handlerClearString, ...props }) => {
  const [clearIcon, setClearIcon] = useState(false)

  useEffect(() => {
    if (string?.length === 0) {
      setClearIcon(false)
    } else { setClearIcon(true) }
  }, [string])
  const handleClearTextField = () => {
    handlerClearString('')
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        {...props}
      />
      {clearIcon
        && <TouchableOpacity onPress={handleClearTextField}>
          <IconCom
            source={icons.clear}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>}
    </View>
  )
}

export default TextInputCom

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    // paddingHorizontal: 5,
  },
})
