import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, Animated, ScrollView,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { SharedElement } from 'react-navigation-shared-element'
import { BackGroundView, HeaderCom, TextCom } from '../../components'

const { width } = Dimensions.get('window')
const rate = width / 375
const CourseDetailsScreen = (props) => {
  const { item } = props?.route?.params
  const language = useSelector((state) => state.storage.language)

  return (
    <BackGroundView>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <HeaderCom text={language?.courseDetails} />
        {/* <SharedElement id={`item.${item.id}.photo`}> */}
        {/* <FastImage
        source={{ uri: item.posterUrl }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      /> */}
        {/* </SharedElement> */}

        <TextCom
          textPrimary
          headingLarge
          style={styles.nameText}
        >
          {item.name}
        </TextCom>
        <TextCom
          textPrimary
          contenTextRegular
          style={styles.desText}
        >
          {item.description}
        </TextCom>
      </ScrollView>
    </BackGroundView>
  )
}
// CourseDetailsScreen.sharedElements = (props) => {
//   const item = props.params
//   return [{
//     id: `item.${item.id}.photo`,
//     animation: 'fade',
//     resize: 'clip',
//     align: 'left- top',
//   }]
// }
export default CourseDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 230 * rate,
    height: 150 * rate,
    borderRadius: 10,
  },
  nameText: {
    width: 345 * rate,
  },
  desText: {
    width: 345 * rate,
    opacity: 0.7,
  },
})
