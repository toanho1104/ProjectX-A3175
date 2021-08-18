import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, FlatList,
} from 'react-native'
import { useSelector } from 'react-redux'
import { HeaderCom } from '../../components'
import BackGroundCom from '../../components/backgroundCom'
import Header from './header'
import ItemCourse from './itemCourse'

const { width } = Dimensions.get('window')
const rate = width / 375
const Love = () => {
  const language = useSelector((state) => state.storage.language)
  const course = useSelector((state) => state.courses.courseList)
  const [myCourse, setMyCourse] = useState([])

  useEffect(() => {
    const newData = course.filter((item) => item.isLearning === true)
    setMyCourse(newData)
  }, [course])
  return (
    <BackGroundCom>
      <Header text={language.wishList} />
      <FlatList
        data={myCourse}
        extraData={myCourse}
        keyExtractor={(item) => `listItem${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <ItemCourse item={item} />
          )
        }}
      />
    </BackGroundCom>
  )
}

export default Love

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
