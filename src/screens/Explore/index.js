import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'

const { width } = Dimensions.get('window')
const rate = width / 375
const Explore = () => {
  return (
    <View>
      <Text>Explore</Text>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
