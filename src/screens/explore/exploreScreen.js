import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../../assets/styles'
import { screenName } from '../../configs'
import { languesActions } from '../../redux/actions'
import { NavigationHelpers } from '../../utils'

// import I18n from '../../languages'

const { width } = Dimensions.get('window')
const rate = width / 375
const Explore = () => {
  useEffect(() => {
    console.log('explore')
  }, [])
  const dispatch = useDispatch()
  const chanlangEN = () => {
    dispatch(languesActions.changeLangues({
      id: 'en',
    }))
  }
  const vi = () => {
    dispatch(languesActions.changeLangues({
      id: 'vi',
    }))
  }
  const login = () => {
    NavigationHelpers.navigateToScreen(screenName.LoginScreen)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={login}
      >
        <Text>login</Text>
      </TouchableOpacity>

      <Text>Explore</Text>
      <TouchableOpacity
        onPress={chanlangEN}
      >
        <Text>vn</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={vi}
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
    // backgroundColor: colors.backgroundPrimary,
  },
})
