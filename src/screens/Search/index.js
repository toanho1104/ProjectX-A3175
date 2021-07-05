import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'

const { width } = Dimensions.get('window')
const rate = width / 375
const Search = () => {
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
