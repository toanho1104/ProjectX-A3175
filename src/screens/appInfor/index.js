import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as Animatable from 'react-native-animatable'
import BackGroundCom from '../../components/backgroundCom'
import { HeaderCom, TextCom } from '../../components'

const { width } = Dimensions.get('window')
const rate = width / 375
const AppInfor = () => {
  const language = useSelector((state) => state.storage.language)
  return (
    <BackGroundCom>
      <HeaderCom text={language?.infor} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Animatable.View
          animation="bounceInLeft"
        >
          <TextCom
            textPrimary
            contenTextBold
          >
            version:
            {' '}
            <TextCom
              textPrimary
              contenTextRegular
            >
              0.1 beta 1
            </TextCom>

          </TextCom>
        </Animatable.View>

        <Animatable.View
          animation="bounceInRight"
        >
          <TextCom
            textPrimary
            contenTextItalic
          >
            Toanho1104
          </TextCom>
        </Animatable.View>
      </View>
    </BackGroundCom>
  )
}

export default AppInfor

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
