import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import { NavigationHelpers } from '../../utils'
import { screenName } from '../../configs'
import { languesActions, themeActions } from '../../redux/actions'
import { isEmptyObject } from '../../common'
import { images } from '../../assets/images'
import { BackGroundView } from '../../components/index'

const { width } = Dimensions.get('window')
const rate = width / 375
const Splash = ({ navigation }) => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.storage.theme)
  const language = useSelector((state) => state.storage.language)
  const persist = useSelector((state) => state._persist)

  useEffect(() => {
    if (persist.rehydrated) {
      if (isEmptyObject(language)) {
        dispatch(languesActions.changeLangues({
          id: 'vi',
        }))
      }
      if (isEmptyObject(theme)) {
        dispatch(themeActions.changeThemes({
          id: 'light',
        }))
      }
    }

    setTimeout(() => {
      NavigationHelpers.navigateToScreen(screenName.Wellcome)
    }, 3000)
  }, [persist.rehydrated])

  return (
    <BackGroundView>
      <View style={styles.topView} />
      <View style={styles.midView}>
        <LottieView
          source={images.splash}
          autoPlay
          loop
          style={styles.splashImage}
        />
      </View>
      <View style={styles.botView}>
        <Text style={styles.waiting}>{language.waiting}</Text>
      </View>
    </BackGroundView>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',

  },
  splashImage: {
    width: 280 * rate,
  },
  waiting: {
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midView: {
    flex: 3,
    alignItems: 'center',
  },
  botView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
