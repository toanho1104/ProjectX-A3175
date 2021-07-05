import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import { colors } from '../../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const Explore = () => {
  return (
    <View style={styles.container}>
      <Text>Explore</Text>
      <Text>Explore</Text>
      <Text>Explore</Text>
      <Text>Explore</Text>
      <Text>Explore</Text>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
  },
})
