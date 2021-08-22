import { set } from 'date-fns/esm'
import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, FlatList,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderCom, LoadingCom, TextCom } from '../../components'
import BackGroundCom from '../../components/backgroundCom'
import { screenName } from '../../configs'
import { courseActions } from '../../redux/actions'
import { Helpers, NavigationHelpers } from '../../utils'
import Header from './header'
import ItemCourse from './itemCourse'

const { width } = Dimensions.get('window')
const rate = width / 375
const Love = () => {
  const dispatch = useDispatch()
  const language = useSelector((state) => state.storage.language)
  const course = useSelector((state) => state.courses.courseList)
  const token = useSelector((state) => state.storage.token)
  const [myCourse, setMyCourse] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const newData = course.filter((item) => item.isLearning === true)
    setMyCourse(newData)
  }, [course])
  const EmptyDataList = () => {
    return (
      <View>
        <TextCom
          textPrimary
          contenTextItalic
        >
          {language?.emptyList}
        </TextCom>
      </View>
    )
  }

  const handleToLearning = (item) => {
    NavigationHelpers.navigateToScreen(screenName.LearningScreen, { item })
  }

  const handleUnregister = (item) => {
    setLoading(true)
    dispatch(courseActions.courseUnregister({
      id: item.id,
    }, {
      headers: { token },
    }, (response) => {
      setLoading(false)
      if (response.success) {
        Helpers.showMess(language.mesUnregister, 'success')
      }
    }))
  }
  return (
    <BackGroundCom>
      <Header text={language.wishList} />
      <FlatList
        data={myCourse}
        extraData={myCourse}
        ListEmptyComponent={EmptyDataList}
        keyExtractor={(item) => `listItem${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <ItemCourse
              item={item}
              handleToLearning={() => { handleToLearning(item) }}
              handleUnregister={() => { handleUnregister(item) }}
            />
          )
        }}
      />
      <LoadingCom isShow={loading} />
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
