/* eslint-disable react/jsx-indent-props */
import React, { useState, useEffect, useMemo } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, Animated, StyleSheet, TouchableOpacity, Alert, Image, Button,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import OtpInputs from 'react-native-otp-inputs'
import AnimatedLottieView from 'lottie-react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import BackGroundCom from '../../components/backgroundCom'
import {
  HeaderCom, LoadingCom, TextCom, TextFieldCom, TextInputCom,
} from '../../components'
import { API_URL, screenName } from '../../configs'
import { Helpers, NavigationHelpers } from '../../utils'
import OptInput from '../../components/otpInput'
import { images } from '../../assets/images'
import { courseActions, userActions } from '../../redux/actions'

const { width } = Dimensions.get('window')
const rate = width / 375
const Register = () => {
  const dispatch = useDispatch()
  const language = useSelector((state) => state.storage.language)
  const theme = useSelector((state) => state.storage.theme)
  const [token, setToken] = useState()

  const [showOPT, setShowOPT] = useState(false)
  const [startTimer, setStartTimer] = useState(false)
  const [secret, setSecret] = useState('')
  const [resOTP, setResOPT] = useState('')
  const [userName, setUserName] = useState()
  const [passWord, setPassWord] = useState()
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState(false)

  console.log(email, token, userName, passWord, resOTP)

  useEffect(() => {
    if (startTimer) {
      const interval = setInterval(() => {
        clearInterval(interval)
        setStartTimer(false)
      }, 60000)
      return () => clearInterval(interval)
    }
  }, [startTimer])

  const loginSchema = Yup.object().shape({
    userName: Yup.string()
      .required(language.nullWarning),
    passWord: Yup.string()
      .required(language.nullWarning),
    fullName: Yup.string()
      .required(language.nullWarning),
  })
  const mailSchema = Yup.object().shape({

    email: Yup.string()
      .required(language.nullWarning)
      .email('mail khong hop len'),

  })

  const handleCreateUser = async (value) => {
    setUserName(value.userName)
    setPassWord(value.passWord)
    setLoading(true)
    const res = await axios.post(`${API_URL}/auth/signUp`, {
      userName: value.userName,
      passWord: value.passWord,
      fullName: value.fullName,
    })

    if (res?.data?.success) {
      setLoading(false)
      setToken(res.data.data.token)
    } else {
      Helpers.showMess(language.userResMes)
    }
  }

  const handleAthMail = async (value) => {
    setEmail(value.email)
    const res = await axios.post(`${API_URL}/auth/sendMail`, {
      email: value.email,
    })
    console.log(res)
    if (res?.data?.success) {
      setSecret(res?.data?.secret)
      setResOPT(res?.data?.token)
      setShowOPT(true)
      setStartTimer(true)
    } else {
      Helpers.showMess(language.emailMes)
    }
  }
  const handleSubmit = async (value) => {
    console.log(typeof value)
    if (value.length == 6) {
      if (value === resOTP) {
        console.log('send')
        const authMailfn = await axios.post(`${API_URL}/auth/emaiAuth`, {
          secret,
          email,
          token: value,
        }, { headers: { token } })
        console.log(authMailfn)
        console.log(authMailfn?.data?.success)
        if (authMailfn?.data?.success) {
          console.log('login')
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
                    Helpers.showMess(language.loginMes, 'success')
                    NavigationHelpers.navigateToScreen(screenName.BottomTabBarRoute)
                  }))
                }
              }))
            } else {
              Helpers.showMess(language.loginMesF)
            }
          }))
        }
      } else { Helpers.showMess(language.codeMes) }
    }
  }
  const AuthenEmail = () => {
    return (
      <View>
        <TextCom
          textPrimary
          headingMedium
        >

          {language.mailAth}
        </TextCom>
        <View style={styles.spaceView} />
        <Formik
          validationSchema={mailSchema}
          initialValues={{
            email: '',
          }}
          onSubmit={(value) => { handleAthMail(value) }}
        >
          {({
            handleChange, handleBlur, handleSubmit, values, errors, setFieldValue,
          }) => (
            <>

              <TextFieldCom
                text={language.email}
                string={values.email}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                handlerClearString={() => { setFieldValue('email', '') }}
                error={errors.email}
                autoCapitalize="none"
              />
              <View style={styles.spaceView} />

              {startTimer

                ? <View
                  style={{
                    backgroundColor: theme.backgroundSecondary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 200 * rate,
                    height: 40 * rate,
                    alignSelf: 'center',
                    borderRadius: 15,
                  }}
                >

                  <TextCom
                    textPrimary
                    buttonTextBold
                  >
                    {language.getKey}
                  </TextCom>
                </View>
                : <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    backgroundColor: theme.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 200 * rate,
                    height: 40 * rate,
                    alignSelf: 'center',
                    borderRadius: 15,
                  }}
                >

                  <TextCom
                    textOnPrimary
                    buttonTextBold
                  >
                    {language.getKey}
                  </TextCom>
                </TouchableOpacity>}
            </>

          )}

        </Formik>
        <View style={styles.spaceView} />
        {
          showOPT && <>
            <View style={{ width: 300, alignSelf: 'center' }}>
              <TextCom
                textPrimary
                contenTextItalic
                style={{ marginBottom: 20, textAlign: 'center' }}

              >
                {language.mailContent}
              </TextCom>
            </View>

            <View style={{ height: 80, alignItems: 'center' }}>
              <CountdownCircleTimer
                size={80}
                isPlaying={startTimer}
                duration={60}
                colors={[
                  ['#004777', 0.4],
                  ['#F7B801', 0.4],
                  ['#A30000', 0.2],
                ]}
              >
                {({ remainingTime, animatedColor }) => (
                  <Animated.Text style={{ color: animatedColor }}>
                    {remainingTime}
                    S
                  </Animated.Text>
                )}
              </CountdownCircleTimer>
            </View>
            <View style={{ height: 100 * rate }}>
              <OtpInputs
                inputContainerStyles={{
                  // backgroundColor: theme.backgroundSecondary,
                  borderRadius: 5,
                  borderWidth: 1,
                  padding: 5,
                  width: 33 * rate,
                  height: 55 * rate,

                }}
                clearTextOnFocus
                focusStyles={{ backgroundColor: theme.backgroundSecondary }}
                inputStyles={{ fontSize: 20 * rate, color: theme.primary }}
                handleChange={(t) => { handleSubmit(t) }}
                numberOfInputs={6}
              />
            </View>

          </>
        }

      </View>
    )
  }
  return (

    <BackGroundCom>
      <HeaderCom text={language.registration} />
      <View style={styles.spaceView} />
      {
        token
          ? <AuthenEmail />
          : <Formik
            validationSchema={loginSchema}
            initialValues={{
              userName: '',
              passWord: '',
              fullName: '',
            }}
            onSubmit={(value) => { handleCreateUser(value) }}
          >
            {({
              handleChange, handleBlur, handleSubmit, values, errors, setFieldValue,
            }) => (
              <>

                <TextFieldCom
                  text={language.userName}
                  string={values.userName}
                  value={values.userName}
                  onChangeText={handleChange('userName')}
                  onBlur={handleBlur('userName')}
                  handlerClearString={() => { setFieldValue('userName', '') }}
                  error={errors.userName}
                />
                <View style={styles.spaceView} />
                <TextFieldCom
                  text={language.passWord}
                  string={values.passWord}
                  value={values.passWord}
                  onChangeText={handleChange('passWord')}
                  onBlur={handleBlur('passWord')}
                  handlerClearString={() => { setFieldValue('passWord', '') }}
                  error={errors.passWord}
                />
                <View style={styles.spaceView} />

                <TextFieldCom
                  text={language.fullName}
                  string={values.fullName}
                  value={values.fullName}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  handlerClearString={() => { setFieldValue('fullName', '') }}
                  error={errors.fullName}
                />

                <View style={styles.spaceView} />

                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    backgroundColor: theme.primary,
                    width: 200 * rate,
                    height: 48 * rate,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: 10,
                  }}
                >

                  <TextCom
                    textOnPrimary
                    buttonTextBold
                  >
                    {language.register}
                  </TextCom>
                </TouchableOpacity>

              </>

            )}

          </Formik>

      }
      <LoadingCom isShow={loading} />
    </BackGroundCom>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  spaceView: { height: 20 },
  image: {
    width: 150 * rate,
    height: 150 * rate,
    // borderWidth: 1,
    // marginBottom: -25 * rate,

  },
})
