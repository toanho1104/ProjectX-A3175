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
import {
  BackGroundView, HeaderCom, IconCom, TextFieldCom,
} from '../../components'
import AvatarView from './avatarView'
import { images } from '../../assets/images'
import { icons } from '../../assets/icons'
import { dateFormat } from '../../common'

const { width } = Dimensions.get('window')
const rate = width / 375
const UserSetting = () => {
  const language = useSelector((state) => state.storage.language)
  const userInfor = useSelector((state) => state.user.userInfor)
  const {
    fullName, avatarUrl, address, dateOfBirth,
  } = userInfor
  const [isDateOfBirth, setDateOfBirth] = useState(dateOfBirth)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date) => {
    console.log('A date has been picked: ', date)
    setDateOfBirth(date)

    hideDatePicker()
  }
  const parseDateString = (value, originalValue) => {
    const parsedDate = isDate(originalValue)
      ? originalValue
      : parse(originalValue, 'dd/MM/yyyy', new Date())
    return parsedDate
  }
  const today = new Date()
  const loginSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(6, 'Password Too Short!')
      .max(12, 'Password Too Long!')
      .required('Password không được bỏ trống'),
    address: Yup.string()
      .min(6, 'Password Too Short!')
      .max(12, 'Password Too Long!')
      .required('Password không được bỏ trống'),
    dateOfBirth: Yup.date()
      .required('Required')
      .transform(parseDateString)
      .max(today, 'ngay khong hop le'),
  })

  return (
    <BackGroundView>

      <Formik
        validationSchema={loginSchema}
        initialValues={{
          fullName,
          address,
          dateOfBirth: isDateOfBirth,
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange, handleBlur, handleSubmit, values, errors, setFieldValue,
        }) => (
          <>
            <HeaderCom text={language.userSetting} />
            <AvatarView source={avatarUrl ? { uri: `data:image/png;base64,${avatarUrl}` } : images.noAvatar} />
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
              value={values.dateOfBirth}
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

            <View>

              <Button onPress={handleSubmit} title="Submit" />
            </View>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              display="spinner"
              mode="date"
              onConfirm={(date) => {
                setFieldValue('dateOfBirth', `${dateFormat(date)}`)
                hideDatePicker()
              }}
              onCancel={hideDatePicker}
            />
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
})
