import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TextCom } from '../../components'
import { NavigationHelpers } from '../../utils'
import { screenName } from '../../configs'

const { width } = Dimensions.get('window')
const rate = width / 375
const CourseCategoryList = ({ data, odd }) => {
  const Item = ({ item }) => {
    const handleToCourseDetailList = () => {
      NavigationHelpers.navigateToScreenInTab(screenName.SearchRoutes, screenName.DetailsCourseListScreen, { item })
    }
    const theme = useSelector((state) => state.storage.theme)
    return (
      <TouchableOpacity
        onPress={handleToCourseDetailList}
        style={[styles.itemView, { backgroundColor: theme?.backgroundSecondary }]}
      >
        <FastImage
          source={{ uri: item?.imageUrl }}
          style={styles.image}
        />

        <TextCom
          textPrimary
          contenTextRegular
        >
          {item.name}
        </TextCom>
      </TouchableOpacity>

    )
  }
  return (
    <View style={styles.container}>
      {odd
        ? data.map((item, index) => {
          if (item.id % 2 !== 0) {
            return (
              <Item item={item} key={index} />

            )
          }
        })
        : data.map((item, index) => {
          if (item.id % 2 === 0) {
            return (
              <Item item={item} key={index} />
            )
          }
        })}
    </View>
  )
}

export default CourseCategoryList

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 7,

  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: (width - 345 * rate) / 2,
    padding: 10,
    borderRadius: 60,

  },
  image: {
    width: 22 * rate,
    height: 22 * rate,
    borderRadius: 50,
    marginRight: 5,
  },
})
