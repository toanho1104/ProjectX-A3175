/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import {
  View, StyleSheet, Text, Modal, SafeAreaView, TouchableOpacity, Dimensions,
} from 'react-native'
import { colors } from '../assets/styles'

const { width, height } = Dimensions.get('window')
const rate = width / 375
const HOC = (WrappedComponent) => {
  const App = (props) => {
    return (

      <View style={styles.container}>
        {/* <View
          style={{ position: 'absolute', zIndex: 2 }}
        >
          <A />
        </View> */}
        <WrappedComponent {...props} />
        <SafeAreaView />
      </View>

    )
  }

  return App
}

export default HOC
const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
})

const A = () => {
  const [a, setA] = useState(1)

  const clickHandler = () => (
    setA(a + 1)
  )
  return (

    <View
      style={{
        backgroundColor: colors.backgroundSecondary,
        width,
        height,
      }}
    >
      <Text>{a}</Text>
      <TouchableOpacity onPress={clickHandler}>
        <Text>aaaaaaaaaa</Text>

      </TouchableOpacity>
    </View>

  )
}
