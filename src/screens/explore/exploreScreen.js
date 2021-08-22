import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, FlatList, ScrollView,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from 'react-native-shared-element'
import { colors } from '../../assets/styles'
import { BackGroundView, SearchFieldCom, TextCom } from '../../components'
import { screenName } from '../../configs'
import { languesActions } from '../../redux/actions'
import { NavigationHelpers } from '../../utils'
import { chunk } from '../../common'
import CourseCategoryList from './courseCategoryList'
import CoureItemList from './courseItemList'
import HeaderTitle from './headerTitle'
import Header from './header'

// import I18n from '../../languages'

const { width } = Dimensions.get('window')
const rate = width / 375
const Explore = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.storage.token)
  const language = useSelector((state) => state.storage.language)
  const category = useSelector((state) => state.categories.courseCategoryList)
  const course = useSelector((state) => state.courses.courseList)
  const [value, setValue] = useState('')
  const [dataCourseOld, setDataCourseOld] = useState()
  const [dataMyCourse, setDataMyCourse] = useState([])

  useEffect(() => {
    const dataNew = [...course]
    if (token) {
      const myCourse = course.filter((item) => item.isLearning === true)
      setDataMyCourse(myCourse)
    }
    setDataCourseOld(dataNew.reverse())
  }, [course])

  return (
    <BackGroundView style={styles.container}>
      <Header text={language.explore} />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {/* <SearchFieldCom
          string={value}
          value={value}
          onChangeText={(val) => setValue(val)}
          handlerClearString={(val) => setValue(val)}
          returnKeyType="search"
          placeholder={language?.searchPlaceholder}
        /> */}
        <HeaderTitle text={language.randomCourse} />
        <View style={{ height: 280 * rate }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={course}
            extraData={course}
            keyExtractor={(item) => `courseList${item.id}`}
            // bounces={false}
            snapToAlignment="start"
            snapToInterval={245 * rate}
            decelerationRate="fast"
            renderItem={({ item, index }) => {
              return (
                <CoureItemList item={item} />
              )
            }}
          />
        </View>
        <HeaderTitle text={language.category} />

        <View style={styles.categoriesView}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ width, boderWidth: 1 }}
          >
            <View>
              <CourseCategoryList data={category} odd />
              <CourseCategoryList data={category} />
            </View>
          </ScrollView>
        </View>
        <HeaderTitle text={language.newCourse} />
        <View style={{ height: 280 * rate }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataCourseOld}
            extraData={dataCourseOld}
            keyExtractor={(item) => `courseList1${item.id}`}
            // bounces={false}
            snapToAlignment="start"
            snapToInterval={245 * rate}
            decelerationRate="fast"
            renderItem={({ item, index }) => {
              return (
                <CoureItemList item={item} />
              )
            }}
          />
        </View>
        {dataMyCourse.length < 0
          && <>
            <HeaderTitle text={language.myCourse} />
            <View style={{ height: 280 * rate, width }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dataMyCourse}
                extraData={dataMyCourse}
                keyExtractor={(item) => `courseList1${item.id}`}
                // bounces={false}
                snapToAlignment="start"
                snapToInterval={245 * rate}
                decelerationRate="fast"
                renderItem={({ item, index }) => {
                  return (
                    <CoureItemList item={item} />
                  )
                }}
              />
            </View>
          </>}

      </ScrollView>
    </BackGroundView>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: { flexGrow: 1 },

  categoriesView: {
    height: 105 * rate,
  },
})
