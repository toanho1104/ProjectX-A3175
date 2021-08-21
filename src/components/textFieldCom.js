import React, { useState, useEffect, useRef } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, Animated,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as Animatable from 'react-native-animatable'
import TextCom from './textCom'
import TextInputCom from './textInputCom'
import IconCom from './iconCom'
import { icons } from '../assets/icons'

const { width } = Dimensions.get('window')
const rate = width / 375
const TextFieldCom = ({
  text, string, handlerClearString, children, error, ...props
}) => {
  const theme = useSelector((state) => state.storage.theme)
  const [clearIcon, setClearIcon] = useState(false)
  const tranX = useRef(new Animated.Value(0)).current
  useEffect(() => {
    if (string?.length === 0) {
      setClearIcon(false)
    } else { setClearIcon(true) }
  }, [string])
  const handleClearTextField = () => {
    handlerClearString('')
  }
  const handleOnfocus = () => {
    Animated.timing(tranX, {
      duration: 300,
      toValue: 310 * rate,
      useNativeDriver: false,
    }).start()
  }
  const handleOnblur = () => {
    Animated.timing(tranX, {
      duration: 300,
      toValue: 0 * rate,
      useNativeDriver: false,
    }).start()
  }
  return (
    <View style={{
      width: 310 * rate,
      height: 60 * rate,

    }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

        <TextCom
          textPrimary
          contenTextRegular
        >
          {text}
        </TextCom>
        {error && <Animatable.View
          animation="tada"
        >
          <TextCom
            style={{ color: 'red' }}
            contenTextItalic
          >
            {error}
          </TextCom>
        </Animatable.View>}
      </View>

      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      >
        <TextInput
          style={styles.textInput}
          {...props}
          onFocus={handleOnfocus}
          onBlur={handleOnblur}
        />
        {clearIcon
          && <TouchableOpacity onPress={handleClearTextField}>
            <IconCom
              source={icons.clear}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>}
        {children}
      </View>
      <View style={{ width: 310 * rate, borderWidth: 1 * StyleSheet.hairlineWidth }} />
      <Animated.View style={{ width: tranX, borderWidth: 2 * StyleSheet.hairlineWidth, borderColor: '#c24c59' }} />
    </View>
  )
}

export default TextFieldCom

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    // paddingHorizontal: 5,
  },
})
