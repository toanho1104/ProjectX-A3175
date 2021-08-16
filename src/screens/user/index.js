import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { icons } from '../../assets/icons'
import { images } from '../../assets/images'
import {
  BackGroundView, BorderLine, ModelCom, TextCom,
} from '../../components'
import { screenName } from '../../configs'
import { NavigationHelpers } from '../../utils'
import AvatarView from './avatarView'
import Button from './buttont'
import Header from './header'
import ItemOption from './itemOption'

const { width } = Dimensions.get('window')
const rate = width / 375
const User = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.storage.token)
  const language = useSelector((state) => state.storage.language)
  const theme = useSelector((state) => state.storage.theme)
  const userInfor = useSelector((state) => state.user.userInfor)
  const { fullName, avatarUrl } = userInfor

  const [isShow, setShow] = useState(false)

  const handleLogoutLogin = () => {
    if (token) {
      setShow(true)
    } else {
      NavigationHelpers.navigateToScreenAndReplace(screenName.Wellcome)
    }
  }
  const handleLogout = async () => {
    setShow(false)
    await dispatch({ type: 'USER_LOGOUT' })
    NavigationHelpers.navigateToScreenAndReplace(screenName.Wellcome)
  }

  const handleHideModal = () => {
    setShow(false)
  }

  const handleToAppSettingScreen = () => {
    NavigationHelpers.navigateToScreen(screenName.AppSetting)
  }

  const handleToContactScreen = () => {
    NavigationHelpers.navigateToScreen(screenName.Contact)
  }

  const handleToAppInfor = () => {
    NavigationHelpers.navigateToScreen(screenName.AppInfor)
  }

  const handleToUserSetting = () => {
    NavigationHelpers.navigateToScreen(screenName.UserSetting)
  }

  const ModelView = () => {
    return (
      <View style={styles.modelView}>
        <View style={{ flex: 1.5, justifyContent: 'center' }}>
          <TextCom
            textPrimary
            headingSmall
          >
            {language?.logoutWarning}
          </TextCom>
        </View>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-around', width: '100%', flex: 1,
        }}
        >
          <TouchableOpacity
            onPress={handleLogout}
            style={[styles.button, { backgroundColor: theme.primary }]}
          >
            <TextCom
              textOnPrimary
              buttonTextBold
            >
              {language.ok}
            </TextCom>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleHideModal}
            style={[styles.button, { backgroundColor: 'red' }]}
          >
            <TextCom
              textOnPrimary
              buttonTextBold
            >
              {language.cancel}
            </TextCom>
          </TouchableOpacity>
        </View>
      </View>)
  }
  return (
    <BackGroundView>
      <Header
        text={language?.user}
      />
      {token
        ? <>
          <AvatarView
            source={avatarUrl ? { uri: `data:image/png;base64,${avatarUrl}` } : images.noAvatar}
            name={fullName}
          />
          <ItemOption
            onPress={handleToAppSettingScreen}
            text={language?.setting}
            source={icons.setting}
          />
          <BorderLine />
          <ItemOption
            onPress={handleToUserSetting}
            text={language?.userSetting}
            source={icons.userSetting}
          />
          <BorderLine />
        </>
        : <View style={{ height: 20 * rate }} />}

      <ItemOption
        onPress={handleToContactScreen}
        text={language?.contact}
        source={icons.contact}
      />
      <BorderLine />

      <ItemOption
        text={language?.infor}
        source={icons.infor}
        onPress={handleToAppInfor}
      />

      <View style={styles.bottom}>
        <Button
          text={!token ? language.login : language.logout}
          onPress={handleLogoutLogin}
        />
      </View>
      <ModelCom
        visible={isShow}
        handleHide={() => setShow(false)}
      // style={{ bottom: -100 }}
      >
        <ModelView />
      </ModelCom>
    </BackGroundView>
  )
}

export default User

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  bottom: {
    marginTop: 50 * rate,
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
