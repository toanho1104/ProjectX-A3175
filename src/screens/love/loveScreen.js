import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'

const { width } = Dimensions.get('window')
const rate = width / 375
const Love = () => {
  return (
    <View>
      <Text>love</Text>
    </View>
  )
}

export default Love

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})