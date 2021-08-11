/* eslint-disable react/jsx-indent-props */
import React, { useState, useEffect, useCallback } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, FlatList, ScrollView,
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { SearchFieldCom, TextCom } from '../../components'
import BackGroundCom from '../../components/backgroundCom'
import HeaderTitle from './headerTitle'
import { popularKeywords, screenName } from '../../configs'
import ItemKeyWord from './itemKeyword'
import ItemCategory from './itemCategory'
import { NavigationHelpers } from '../../utils'
import CoureItem from './courseItem'

const { width } = Dimensions.get('window')
const rate = width / 375
const Search = () => {
  const language = useSelector((state) => state.storage.language)
  const category = useSelector((state) => state.categories.courseCategoryList)
  const course = useSelector((state) => state.courses.courseList)
  const [value, setValue] = useState('')
  const [dataList, setDataList] = useState([])
  // useFocusEffect(
  //   useCallback(() => {
  //     console.log('sera=cg')
  //     return () => {
  //       alert('Screen was unfocused')
  //       // Do something when the screen is unfocused
  //       // Useful for cleanup functions
  //     }
  //   }, [])
  // )
  const handeSearchFilter = (text) => {
    if (text) {
      console.log(text)
      const newData = course.filter((item) => {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setDataList(newData)
      setValue(text)
    } else {
      console.log('nox')
      setValue(text)
    }
  }

  const handleToCourseDetailsScreen = (item) => {
    NavigationHelpers.navigateToScreen(screenName.DetailsCourseListScreen, { item })
  }
  const handlePressKeyWord = (item) => {
    const text = item?.title
    if (text) {
      console.log(text)
      const newData = course.filter((item) => {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setDataList(newData)
      setValue(text)
    } else {
      console.log('nox')
      setValue(text)
    }
  }

  const ListHeaderComponent = () => {
    return (
      <View>
        <HeaderTitle text={language?.popularKeywords} />
        <View style={styles.listKeywordCom}>
          {popularKeywords.map((item) => {
            return (
              <TouchableOpacity onPress={() => { handlePressKeyWord(item) }} key={item.id}>
                <ItemKeyWord item={item} />
              </TouchableOpacity>
            )
          })}
        </View>
        <HeaderTitle text={language?.category} />
      </View>
    )
  }
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

  return (
    <BackGroundCom>
      <SearchFieldCom
        string={value}
        value={value}
        onChangeText={(text) => handeSearchFilter(text)}
        handlerClearString={(val) => setValue(val)}
        returnKeyType="search"
        placeholder={language?.searchPlaceholder}
      />

      {value.length === 0 ? <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={category}
        extraData={category}
        keyExtractor={(item) => `category${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => handleToCourseDetailsScreen(item)}
            >
              <ItemCategory item={item} />
            </TouchableOpacity>
          )
        }}
      />
        : <FlatList
          data={dataList}
          extraData={dataList}
          keyExtractor={(item) => `SearchDataList${item.id}`}
          ListEmptyComponent={EmptyDataList}
          renderItem={({ item, index }) => {
            return (
              <CoureItem item={item} />
            )
          }}
        />}
    </BackGroundCom>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listKeywordCom: {
    // borderWidth: 1,
    width: 345 * rate,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
