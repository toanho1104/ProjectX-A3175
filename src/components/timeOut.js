import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'

const { width } = Dimensions.get('window')
const rate = width / 375
const TimeOut = ({ start }) => {
  const [time, setTime] = useState(60)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((lastTimerCount) => {
        if (lastTimerCount <= 1) {
          clearInterval(interval)
        }
        return lastTimerCount - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <View>
      <Text>{time}</Text>
    </View>
  )
}

export default TimeOut

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
