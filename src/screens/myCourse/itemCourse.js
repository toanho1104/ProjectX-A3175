import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TextCom } from '../../components'
import { courseActions } from '../../redux/actions'
import { Helpers, NavigationHelpers } from '../../utils'
import { screenName } from '../../configs'

const { width } = Dimensions.get('window')
const rate = width / 375
const ItemCourse = ({ item, handleToLearning, handleUnregister }) => {
  const dispatch = useDispatch()
  const { name, posterUrl } = item

  const theme = useSelector((state) => state.storage.theme)
  const language = useSelector((state) => state.storage.language)
  const token = useSelector((state) => state.storage.token)

  // const handleToLearning = () => {
  //   NavigationHelpers.navigateToScreen(screenName.LearningScreen, { item })
  // }

  // const handleUnregister = () => {
  //   dispatch(courseActions.courseUnregister({
  //     id: item.id,
  //   }, {
  //     headers: { token },
  //   }, (response) => {
  //     showLoading(false)
  //     if (response.success) {
  //       Helpers.showMess(language.mesUnregister, 'success')
  //     }
  //   }))
  // }

  return (
    <View style={styles.container}>
      <FastImage
        source={{ uri: item?.posterUrl }}
        style={styles.image}
      />
      <View style={{ flex: 1, marginLeft: 10 * rate }}>
        <TextCom
          textPrimary
          headingSmall
          numberOfLines={1}
        >
          {name}
        </TextCom>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          flex: 1,
        }}
        >
          <TouchableOpacity
            onPress={handleToLearning}
            style={[styles.button, { backgroundColor: theme.primary }]}
          >
            <TextCom
              textOnPrimary
              buttonTextBold
            >
              {language?.start}
            </TextCom>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleUnregister}
            style={[styles.button, { backgroundColor: 'red' }]}
          >
            <TextCom
              textOnPrimary
              buttonTextBold
            >
              {language?.cancel}
            </TextCom>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ItemCourse

const styles = StyleSheet.create({
  container: {
    width: 345 * rate,
    flexDirection: 'row',
    marginBottom: 20 * rate,

  },
  image: {
    width: 80 * rate,
    height: 80 * rate,
    borderRadius: 15,
  },
  button: {
    width: 90 * rate,
    height: 35 * rate,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
})
