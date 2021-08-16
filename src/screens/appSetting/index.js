import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, Switch,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import DropDownPicker from 'react-native-dropdown-picker'
import {
  BackGroundView, HeaderCom, ModelCom, TextCom,
} from '../../components'
import { languesActions, themeActions } from '../../redux/actions'

const { width } = Dimensions.get('window')
const rate = width / 375
const AppSetting = () => {
  const dispatch = useDispatch()
  const language = useSelector((state) => state.storage.language)
  const theme = useSelector((state) => state.storage.theme)
  const [isEnabledDarkMode, setIsEnabledDarkMode] = useState(theme.darkMode)
  const [isEnabledSync, setEnabledSync] = useState(false)
  const [isShowModal, setShowModal] = useState(false)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  useEffect(() => {
    if (isEnabledDarkMode) {
      dispatch(themeActions.changeThemes({
        val: 'dark',
      }))
    } else {
      dispatch(themeActions.changeThemes({
        val: 'light',
      }))
    }
  }, [isEnabledDarkMode])

  const toggleSwitchDarkMode = () => setIsEnabledDarkMode(!isEnabledDarkMode)
  const toggleSwitchSync = () => {
    setShowModal(!isShowModal)
    setEnabledSync(!isEnabledSync)
  }

  const changeLangues = (val) => {
    dispatch(languesActions.changeLangues({
      val,
    }))
  }
  const ModelView = () => {
    return (
      <View style={styles.modelView}>
        <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
          <TextCom
            textPrimary
            headingSmall
          >
            {language?.updateWarning}
          </TextCom>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={toggleSwitchSync}
            style={[styles.button, { backgroundColor: theme.primary }]}
          >
            <TextCom
              textOnPrimary
              buttonTextBold
            >
              {language.ok}
            </TextCom>
          </TouchableOpacity>
        </View>
      </View>)
  }
  return (
    <BackGroundView>
      <HeaderCom
        text={language?.setting}
      />
      <View style={styles.viewOption}>
        <TextCom
          textPrimary
        >

          {language?.syncSettings}
        </TextCom>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabledSync ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitchSync}
          value={isEnabledSync}
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
          thumbColor={isEnabledDarkMode ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitchDarkMode}
          value={isEnabledDarkMode}
        />
      </View>

      <View style={styles.viewOption}>
        <TextCom
          textPrimary
        >
          {language.language}
        </TextCom>
        <DropDownPicker
          theme="LIGHT"
          containerStyle={{
            width: 170,
          }}
          dropDownContainerStyle={{
            backgroundColor: '#dfdfdf',
            width: 170,
          }}
          placeholder={language.languageHonder}
          open={open}
          value={value}
          items={[
            { label: language.vietnamese, value: 'vi' },
            { label: language.English, value: 'en' },
          ]}
          setOpen={setOpen}
          setValue={setValue}
          onChangeValue={(val) => {
            changeLangues(val)
          }}
        />
        <ModelCom
          visible={isShowModal}
        >
          <ModelView />
        </ModelCom>
      </View>
    </BackGroundView>
  )
}

export default AppSetting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  viewOption: {
    marginTop: 20 * rate,
    width: 300 * rate,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modelView: {
    width: 290 * rate,
    height: 180 * rate,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100 * rate,
    height: 52 * rate,
    borderRadius: 10,
  },
})
