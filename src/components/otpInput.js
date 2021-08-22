import React, { useState, useEffect, memo } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import OtpInputs from 'react-native-otp-inputs'

const { width } = Dimensions.get('window')
const rate = width / 375
const OptInput = () => {
  const theme = useSelector((state) => state.storage.theme)
  return (
    <View style={{ height: 100 * rate }}>
      <OtpInputs
        inputContainerStyles={{
          // backgroundColor: theme.backgroundSecondary,
          borderRadius: 5,
          borderWidth: 1,
          padding: 5,
          width: 33 * rate,
          height: 55 * rate,

        }}
        focusStyles={{ backgroundColor: theme.backgroundSecondary }}
        inputStyles={{ fontSize: 20 * rate, color: theme.primary }}
        // handleChange={(code) => setOtp(code)}
        numberOfInputs={7}
      />
    </View>

  )
}

export default memo(OptInput)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
