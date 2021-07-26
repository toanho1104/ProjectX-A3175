import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'
import { colors } from '../../assets/styles'
import { BackGroundView, SearchFieldCom } from '../../components'
import { screenName } from '../../configs'
import { languesActions } from '../../redux/actions'
import { NavigationHelpers } from '../../utils'

// import I18n from '../../languages'

const { width } = Dimensions.get('window')
const rate = width / 375
const Explore = () => {
  useEffect(() => {
    console.log('ex')
    axios.get('http://192.168.1.17:8000/api/courseCategory/')
      .then((response) => Reactotron.log(response))
      .catch((err) => console.log(err))
  }, [])
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  return (
    <BackGroundView style={styles.container}>
      <SearchFieldCom
        value={value}
        onChangeText={(val) => setValue(val)}
        handlerClearString={(val) => setValue(val)}
        returnKeyType="search"
      />
    </BackGroundView>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
