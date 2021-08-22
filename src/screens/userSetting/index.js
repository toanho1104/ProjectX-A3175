import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, Button,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { parse, isDate } from 'date-fns'
import Moment from 'moment'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import {
  BackGroundView, BorderLine, HeaderCom, IconCom, ModelCom, TextCom, TextFieldCom,
} from '../../components'
import AvatarView from './avatarView'
import { images } from '../../assets/images'
import { icons } from '../../assets/icons'
import { dateFormat } from '../../common'
import { userActions } from '../../redux/actions'
import { Helpers } from '../../utils'

const { width, height } = Dimensions.get('window')
const rate = width / 375
const UserSetting = () => {
  const dispatch = useDispatch()
  const language = useSelector((state) => state.storage.language)
  const userInfor = useSelector((state) => state.user.userInfor)
  const theme = useSelector((state) => state.storage.theme)
  const token = useSelector((state) => state.storage.token)
  const {
    fullName, avatarUrl, address, dateOfBirth,
  } = userInfor
  const [isShowModal, setShowModal] = useState(false)
  const [imgUrl, setImgUrl] = useState(avatarUrl)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [date, setDate] = useState(dateFormat(dateOfBirth))

  const tongShowModal = () => {
    setShowModal(!isShowModal)
  }
  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }
  const handleUpdateUserInfo = (value) => {
    console.log(value)
    const {
      fullName, address, dateOfBirth,
    } = value
    dispatch(userActions.updateUserInfo({
      fullName,
      avatarUrl: imgUrl,
      address,
      dateOfBirth,
    }, {
      headers: { token },
    }, (res) => {
      if (res.success) {
        Helpers.showMess('Cap nhat thanh cong', 'success')
      }
    }))
  }

  const options = {
    title: 'Select Avatar',
    quality: 0.3,
    maxHeight: 200,
    maxWidth: 200,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    includeBase64: true,
  }

  const showCamera = () => {
    console.log('showcam')

    setShowModal(false)
    launchCamera(options, (response) => {
      console.tron.log(response)
      if (response.error) {
        console.log('LaunchCamera Error: ', response.error)
      } else {
        setImgUrl(response.assets[0].base64)
      }
    })
  }

  const showCameraRoll = () => {
    console.log('showcamRoll')
    setShowModal(false)
    launchImageLibrary(options, (response) => {
      if (response.error) {
        console.log('LaunchImageLibrary Error: ', response.error)
      } else {
        setImgUrl(response.assets[0].base64)
      }
    })
  }

  // const parseDateString = (value, originalValue) => {
  //   const parsedDate = isDate(originalValue)
  //     ? originalValue
  //     : parse(originalValue, 'dd/MM/yyyy', new Date())
  //   return parsedDate
  // }
  const today = new Date()
  const loginSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(4, language.nameWarning)
      // .max(12, 'Password Too Long!')
      .required(language.nullWarning),
    address: Yup.string()
      .min(6, language.addressWarning)
      // .max(12, 'Password Too Long!')
      .required(language.nullWarning),
    dateOfBirth: Yup.date()
      .required(language.nullWarning)
      // .transform(parseDateString)
      .max(today, 'ngay khong hop le'),
  })

  const ModelView = () => {
    return (
      <View style={styles.modelView}>
        <TouchableOpacity
          onPress={showCameraRoll}
          style={[styles.button, { backgroundColor: theme.primary }]}
        >
          <TextCom
            textOnPrimary
            buttonTextBold
          >
            chon anh thu vien
          </TextCom>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={showCamera}
          style={[styles.button, { backgroundColor: theme.primary }]}
        >
          <TextCom
            textOnPrimary
            buttonTextBold
          >
            Chup anh
          </TextCom>
        </TouchableOpacity>
        <View style={{ height: 20 * rate }} />
        <BorderLine />
        <TouchableOpacity
          onPress={tongShowModal}
          style={[styles.button, { backgroundColor: 'red' }]}
        >
          <TextCom
            textOnPrimary
            buttonTextBold
          >
            Huy bo
          </TextCom>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <BackGroundView>

      <Formik
        validationSchema={loginSchema}
        initialValues={{
          fullName,
          address,
          dateOfBirth,
        }}
        onSubmit={(values) => handleUpdateUserInfo(values)}
      >
        {({
          handleChange, handleBlur, handleSubmit, values, errors, setFieldValue,
        }) => (
          <>
            <HeaderCom text={language.userSetting} />
            <AvatarView
              source={avatarUrl ? { uri: `data:image/png;base64,${imgUrl}` } : images.noAvatar}
              onPress={tongShowModal}
            />
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
            <TextFieldCom
              text={language.address}
              // string={address}
              value={values.address}
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              handlerClearString={() => { setFieldValue('address', '') }}
              error={errors.address}
            />

            <View style={styles.spaceView} />

            <TextFieldCom
              text={language.dateOfBirth}
              string=""
              value={date}
              onChangeText={handleChange('dateOfBirth')}
              onBlur={handleBlur('dateOfBirth')}
              // handlerClearString={() => { }}
              // selectTextOnFocus={false}
              editable={false}
              error={errors.dateOfBirth}
            >
              <TouchableOpacity
                onPress={showDatePicker}
              >
                <Image source={icons.calendar} style={styles.icon} />
              </TouchableOpacity>
            </TextFieldCom>
            <View style={styles.spaceView} />

            <TouchableOpacity
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
                {language.change}
              </TextCom>
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              display="spinner"
              mode="date"
              onConfirm={(date) => {
                // setFieldValue('dateOfBirth', date)
                setDate(dateFormat(date))
                hideDatePicker()
              }}
              onCancel={hideDatePicker}
            />
            <ModelCom
              visible={isShowModal}
            // handleHide={tongShowModal}
            >
              <ModelView />
            </ModelCom>
          </>

        )}

      </Formik>

    </BackGroundView>
  )
}

export default UserSetting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  spaceView: { height: 15 },
  icon: {
    width: 30 * rate,
    height: 30 * rate,
  },
  modelView: {
    width,
    height: 265 * rate,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    width: 345 * rate,
    height: 52 * rate,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
})
