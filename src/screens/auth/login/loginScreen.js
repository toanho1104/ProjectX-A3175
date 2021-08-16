import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, BackHandler, TouchableWithoutFeedback, Keyboard, ScrollView,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  BackGroundView, TextCom, TextInputCom, TextFieldCom, IconCom,
} from '../../../components'
import { images } from '../../../assets/images'
import { icons } from '../../../assets/icons'
import { courseActions, userActions } from '../../../redux/actions'
import { Helpers, NavigationHelpers } from '../../../utils'
import { screenName } from '../../../configs'

const { width, height } = Dimensions.get('window')
const rate = width / 375
const rateHeight = height / 375
const LoginScreen = () => {
  const dispatch = useDispatch()
  const language = useSelector((state) => state.storage.language)
  const theme = useSelector((state) => state.storage.theme)
  const [userName, setUserName] = useState('admin')
  const [passWord, setPassWord] = useState('123456')
  const [showPass, isShowPass] = useState(true)

  // const backAction = () => {
  //   Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => null,
  //       style: 'cancel',
  //     },
  //     { text: 'YES', onPress: () => BackHandler.exitApp() },
  //   ])
  //   return true
  // }

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', backAction)

  //   return () => BackHandler.removeEventListener('hardwareBackPress', backAction)
  // }, [])
  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }
  const tongShow = () => {
    isShowPass(!showPass)
  }
  const handleLogin = () => {
    dispatch(userActions.userLogin({
      userName,
      passWord,
    }, (userRes) => {
      if (userRes?.success) {
        console.tron.log(userRes)
        dispatch(courseActions.getCourse({
          headers: { token: userRes?.data?.token },
        }, (resCourse) => {
          if (resCourse.success) {
            dispatch(userActions.getUserInfo({
              headers: { token: userRes?.data?.token },
            }, () => {
              NavigationHelpers.navigateToScreenAndReplace(screenName.BottomTabBarRoute)
            }))
          }
        }))

        Helpers.showMess('Đăng nhập thành công', 'success')
        NavigationHelpers.navigateToScreenAndReplace(screenName.BottomTabBarRoute)
      } else {
        Helpers.showMess('Đăng nhập thành công')
      }
    }))
  }
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard} style={{ flex: 1 }}>
      <BackGroundView style={styles.container}>
        <ScrollView>
          <KeyboardAwareScrollView
            scrollEnabled={false}
            keyboardOpeningTime={50}
          >
            <FastImage
              source={images.login}
              style={styles.mainImage}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={{ width: 310 * rate, marginTop: 20 * rate }}>
              <TextCom
                textPrimary
                style={{ opacity: 0.5, alignSelf: 'flex-start' }}
              >
                {language?.wellcomeBack}
              </TextCom>
              <TextCom
                textPrimary
                style={{ alignSelf: 'flex-start' }}
                headingLarge
              >
                {language?.accountLogin}
              </TextCom>
              <View style={styles.space} />
              <TextFieldCom
                text={language?.userName}
                value={userName}
                onChangeText={(text) => setUserName(text)}
                handlerClearString={(val) => setUserName(val)}
                string={userName}
                placeholder={language?.userNamePl}
              />
              <View style={styles.space} />
              <TextFieldCom
                text={language?.passWord}
                secureTextEntry={showPass}
                value={passWord}
                onChangeText={(text) => setPassWord(text)}
                handlerClearString={(val) => setPassWord(val)}
                string={passWord}
                placeholder={language?.passWordPl}
              >
                <TouchableOpacity onPress={tongShow} style={{ marginLeft: 10 }}>
                  {showPass ? <IconCom source={icons.show} /> : <IconCom source={icons.hide} />}
                </TouchableOpacity>
              </TextFieldCom>
            </View>
            <View style={styles.space} />
            <TouchableOpacity
              onPress={handleLogin}
              style={[styles.button, { backgroundColor: theme.primary }]}
            >
              <TextCom
                textOnPrimary
                buttonTextBold
              >
                {language?.login}
              </TextCom>
            </TouchableOpacity>
            <View style={{ width: 310 * rate, marginTop: 15 * rate }}>
              <TextCom
                textPrimary
                linkTextNomarl
                style={{ alignSelf: 'center', color: theme.primary }}
              >
                {language?.loginWith}
              </TextCom>
            </View>
            <OptionListLogin />
            <View style={{
              width: 310 * rate,
              marginTop: 20 * rate,
              alignItems: 'center',
              justifyContent: 'center',
              height: 25 * rate,
              flexDirection: 'row',
            }}
            >
              <TextCom
                textPrimary
                linkTextNomarl
              >
                {language?.noAccount}
                {' '}
              </TextCom>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                <TextCom
                  linkTextBold
                  textPrimary
                  style={{ color: theme.primary }}
                >
                  {language?.register}
                </TextCom>
              </TouchableOpacity>

            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </BackGroundView>
    </TouchableWithoutFeedback>
  )
}
const OptionListLogin = () => {
  return (
    <View style={{
      width: 310 * rate,
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: 15 * rate,
    }}
    >
      <ItemLogin source={icons.faceBook} />
      <ItemLogin source={icons.google} />
      <ItemLogin source={icons.apple} />
    </View>
  )
}

const ItemLogin = ({ source }) => {
  return (
    <TouchableOpacity style={{ borderWidth: 2 * StyleSheet.hairlineWidth, borderRadius: 60, padding: 5 }}>
      <FastImage
        source={source}
        style={{ width: 55 * rate, height: 55 * rate }}
      />
    </TouchableOpacity>
  )
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  mainImage: {
    width: 290 * rate,
    height: 170 * rate,
  },
  space: {
    height: 20 * rate,
  },
  button: {
    width: 310 * rate,
    height: 55 * rate,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 25 * rate,
  },
})
