import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { BackGroundView, HeaderCom, TextCom } from '../../components'
import CoureItem from './courseItem'

const { width } = Dimensions.get('window')
const rate = width / 375
const DetailsCourseListScreen = (props) => {
  const { id, name } = props?.route?.params?.item
  const course = useSelector((state) => state.courses.courseList)
  const languages = useSelector((state) => state.storage.language)
  const [courseByCategory, setCourseByCategory] = useState()

  useEffect(() => {
    const courseListGetByCategory = course.filter((item) => item.categoryId === id)
    setCourseByCategory(courseListGetByCategory)
  }, [])

  const EmptyDataList = () => {
    return (
      <View>
        <TextCom
          textPrimary
          contenTextItalic
        >
          {languages?.emptyList}
        </TextCom>
      </View>
    )
  }
  return (
    <BackGroundView>
      <HeaderCom text={name} />
      <FlatList
        data={courseByCategory}
        extraData={courseByCategory}
        keyExtractor={(item) => `courseCategoryList${item.id}`}
        ListEmptyComponent={EmptyDataList}
        renderItem={({ item, index }) => {
          return (
            <CoureItem item={item} />
          )
        }}
      />
    </BackGroundView>
  )
}

export default DetailsCourseListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
