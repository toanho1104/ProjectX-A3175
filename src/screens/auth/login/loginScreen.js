import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, BackHandler, TouchableWithoutFeedback, Keyboard,
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

const { width } = Dimensions.get('window')
const rate = width / 375
const LoginScreen = () => {
  const language = useSelector((state) => state.storage.language)
  const theme = useSelector((state) => state.storage.theme)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
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
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard} style={{ flex: 1 }}>
      <BackGroundView style={styles.container}>
        <KeyboardAwareScrollView
          scrollEnabled={false}
          keyboardOpeningTime={50}
        >
          <FastImage
            source={images.login}
            style={styles.mainImage}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={{ width: 310 * rate, marginTop: 20 }}>
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
              value={password}
              onChangeText={(text) => setPassword(text)}
              handlerClearString={(val) => setPassword(val)}
              string={password}
              placeholder={language?.passWordPl}
            >
              <TouchableOpacity onPress={tongShow} style={{ marginLeft: 10 }}>
                {showPass ? <IconCom source={icons.show} /> : <IconCom source={icons.hide} />}
              </TouchableOpacity>
            </TextFieldCom>
          </View>
          <View style={styles.space} />
          <View style={[styles.button, { backgroundColor: theme.primary }]}>
            <TextCom
              textOnPrimary
              buttonTextBold
            >
              {language?.login}
            </TextCom>
          </View>
          <View style={{ width: 310 * rate, marginTop: 20 }}>
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
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            height: 30,
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
      marginTop: 20,
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
        style={{ width: 60 * rate, height: 60 * rate }}
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
    width: 300 * rate,
    height: 180 * rate,
  },
  space: {
    height: 20,
  },
  button: {
    width: 310 * rate,
    height: 60 * rate,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
})
