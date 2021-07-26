import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, Switch,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import { BackGroundView, TextCom } from '../../components/index'
import { images } from '../../assets/images'
import { themeActions } from '../../redux/actions'

const { width } = Dimensions.get('window')
const rate = width / 375
const Slide2 = () => {
  console.log('Slide2')
  const dispatch = useDispatch()
  const language = useSelector((state) => state.storage.language)
  const theme = useSelector((state) => state.storage.theme)
  const [isEnabled, setIsEnabled] = useState(theme.darkMode)
  const toggleSwitch = () => setIsEnabled(!isEnabled)
  useEffect(() => {
    if (isEnabled) {
      dispatch(themeActions.changeThemes({
        val: 'dark',
      }))
    } else {
      dispatch(themeActions.changeThemes({
        val: 'light',
      }))
    }
  }, [isEnabled])
  return (
    <BackGroundView>
      <View style={styles.imageView}>
        <LottieView
          source={images.mode}
          autoPlay
          loop
          style={styles.image}
        />
      </View>

      <View style={styles.viewOption}>
        <TextCom
          textPrimary
        >

          {language.darkMode}
        </TextCom>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

    </BackGroundView>
  )
}

export default Slide2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageView: {
    width: 300 * rate,
    height: 300 * rate,
  },
  viewOption: {
    marginTop: 20 * rate,
    width: 300 * rate,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
