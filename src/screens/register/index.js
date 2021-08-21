/* eslint-disable react/jsx-indent-props */
import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, Button,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import BackGroundCom from '../../components/backgroundCom'
import { HeaderCom, TextCom, TextFieldCom } from '../../components'
import { API_URL } from '../../configs'
import { Helpers } from '../../utils'

const { width } = Dimensions.get('window')
const rate = width / 375
const Register = () => {
  const language = useSelector((state) => state.storage.language)
  const [token, setToken] = useState(1)
  const loginSchema = Yup.object().shape({
    userName: Yup.string()
      .required(language.nullWarning),
    passWord: Yup.string()
      .required(language.nullWarning),
    fullName: Yup.string()
      .required(language.nullWarning),
    // .transform(parseDateString)
    // .max(today, 'ngay khong hop le'),
  })

  const handleCreateUser = async (value) => {
    const res = await axios.post(`${API_URL}/auth/signUp`, {
      userName: value.userName,
      passWord: value.passWord,
      fullName: value.fullName,
    })
    if (res?.data?.success) {
      setToken(res.data.data.token)
    } else {
      Helpers.showMess('user ton tai')
    }
  }

  const AuthenEmail = () => {
    return (
      <View>
        <TextCom
          textPrimary
          headingMedium
        >

          Xac thuc e mail
        </TextCom>

        <Formik
          validationSchema={loginSchema}
          initialValues={{
            email: '',
          }}
          onSubmit={(value) => { handleCreateUser(value) }}
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
              />

              <View style={styles.spaceView} />

              <View>

                <Button onPress={handleSubmit} title="Submit" />
              </View>

            </>

          )}

        </Formik>
      </View>
    )
  }
  return (

    <BackGroundCom>
      <HeaderCom text={language.registration} />
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

                <View>

                  <Button onPress={handleSubmit} title="Submit" />
                </View>

              </>

            )}

          </Formik>

      }

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

})
