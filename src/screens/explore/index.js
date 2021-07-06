import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import { colors } from '../../assets/styles'
import I18n from '../../languages'

const { width } = Dimensions.get('window')
const rate = width / 375
const Explore = () => {
  return (
    <View style={styles.container}>
      <Text>{I18n.t('explore')}</Text>
      <Text>Explore</Text>
      <Text>Explore</Text>
      <Text>Explore</Text>
      <TouchableOpacity
        onPress={() => {
          I18n.locale = 'vi'
        }}
      >
        <Text>vn</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          I18n.locale = 'en'
        }}
      >
        <Text>eng</Text>
      </TouchableOpacity>
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
