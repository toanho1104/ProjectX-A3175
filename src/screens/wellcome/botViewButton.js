import React, { memo, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fonts, textStyles } from '../../assets/styles'
import { TextCom } from '../../components'
import { NavigationHelpers } from '../../utils'
import { screenName } from '../../configs'

const { width } = Dimensions.get('window')
const rate = width / 375
const BotViewButton = () => {
  const theme = useSelector((state) => state.storage.theme)
  const language = useSelector((state) => state.storage.language)
  console.log('buton login')
  const handlerToHome = () => {
    NavigationHelpers.navigateToScreenAndReplace(screenName.BottomTabBarRoute)
  }
  return (
    <View style={[styles.container, { backgroundColor: theme.secondary }]}>
      <TouchableOpacity
        style={styles.button}
        onPress={handlerToHome}
      >
        <TextCom textOnSecondary buttonTextBold>
          {language.browse}
        </TextCom>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <TextCom textOnSecondary buttonTextBold>
          {language.login}
        </TextCom>
      </TouchableOpacity>
    </View>
  )
}

export default memo(BotViewButton)

const styles = StyleSheet.create({
  container: {
    height: 50 * rate,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
