import React, { useEffect } from 'react'
import {
  View, Dimensions, StyleSheet,
} from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import { NavigationHelpers } from '../../utils'
import { screenName } from '../../configs'
import { categoryActions, languesActions, themeActions } from '../../redux/actions'
import { isEmptyObject } from '../../common'
import { images } from '../../assets/images'
import { BackGroundView, TextCom } from '../../components/index'

const { width } = Dimensions.get('window')
const rate = width / 375
const Splash = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.storage.theme)
  const language = useSelector((state) => state.storage.language)
  const persist = useSelector((state) => state._persist)

  useEffect(() => {
    if (persist.rehydrated) {
      if (isEmptyObject(language)) {
        dispatch(languesActions.changeLangues({
          val: 'vi',
        }))
      }
      if (isEmptyObject(theme)) {
        dispatch(themeActions.changeThemes({
          val: 'light',
        }))
      }
      // console.log('category')
      // dispatch(categoryActions.getCategoryCouser({}))
    }

    setTimeout(() => {
      NavigationHelpers.navigateToScreenAndReplace(screenName.Wellcome)
    }, 4000)
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
        <TextCom
          textPrimary
        >
          {language.waiting}
        </TextCom>
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
