import React, { useState, useEffect, useCallback } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

const { width } = Dimensions.get('window')
const rate = width / 375
const Search = () => {
  useFocusEffect(
    useCallback(() => {
      console.log('sera=cg')
      return () => {
        alert('Screen was unfocused')
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      }
    }, [])
  )
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
