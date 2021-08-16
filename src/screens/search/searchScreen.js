/* eslint-disable react/jsx-indent-props */
import React, { useState, useEffect, useCallback } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, FlatList, ScrollView,
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import Voice from '@react-native-community/voice'
import LottieView from 'lottie-react-native'
import { ModelCom, SearchFieldCom, TextCom } from '../../components'
import BackGroundCom from '../../components/backgroundCom'
import HeaderTitle from './headerTitle'
import { popularKeywords, screenName } from '../../configs'
import ItemKeyWord from './itemKeyword'
import ItemCategory from './itemCategory'
import { NavigationHelpers } from '../../utils'
import CoureItem from './courseItem'
import { images } from '../../assets/images'

const { width } = Dimensions.get('window')
const rate = width / 375
const Search = () => {
  const language = useSelector((state) => state.storage.language)
  const category = useSelector((state) => state.categories.courseCategoryList)
  const course = useSelector((state) => state.courses.courseList)
  const [value, setValue] = useState('')
  const [dataList, setDataList] = useState([])
  const [isShow, setShow] = useState(false)
  const [isLoading, setLoading] = useState(false)
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
  useFocusEffect(
    useCallback(() => {
      Voice.onSpeechStart = onSpeechStartHandler
      Voice.onSpeechEnd = onSpeechEndHandler
      Voice.onSpeechResults = onSpeechResultsHandler
      Voice.onSpeechError = onSpeechError

      return () => {
        Voice.destroy().then(Voice.removeAllListeners)
      }
    }, [])
  )

  useEffect(() => {
    handeSearchFilter(value)

    return () => {

    }
  }, [value])

  const onSpeechError = (e) => {
    setShow(false)
    console.log('onSpeechError: ', e)
  }

  const onSpeechStartHandler = (e) => {
    setShow(true)
    console.log('start handler==>>>', e)
  }
  const onSpeechEndHandler = (e) => {
    setShow(false)
    console.log('stop handler', e)
  }

  const onSpeechResultsHandler = (e) => {
    const text = e.value[0]
    setValue(text)
    console.log('speech result handler', e)
  }

  const startRecording = async () => {
    try {
      await Voice.start('en-Us')
    } catch (error) {
      console.log('error raised', error)
    }
  }

  const stopRecording = async () => {
    try {
      await Voice.stop()
    } catch (error) {
      console.log('error raised', error)
    }
  }

  const handeSearchFilter = (text) => {
    if (text) {
      const newData = course.filter((item) => {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setDataList(newData)
    } else {

    }
  }

  const handleToCourseDetailsScreen = (item) => {
    NavigationHelpers.navigateToScreen(screenName.DetailsCourseListScreen, { item })
  }
  const handlePressKeyWord = (text) => {
    setValue(text?.title)
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
        onChangeText={(text) => setValue(text)}
        handlerClearString={(val) => setValue(val)}
        returnKeyType="search"
        placeholder={language?.searchPlaceholder}
        onPress={startRecording}
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

      <ModelCom
        visible={isShow}
      // handleHide={(t) => setShow(t)}
      >
        <View
          style={styles.modalCon}

        >
          <LottieView
            source={images.record}
            autoPlay
            loop
            style={styles.image}
          />
          <TouchableOpacity
            onPress={stopRecording}
            style={{ backgroundColor: 'red', padding: 6, borderRadius: 4 }}
          >
            <TextCom
              buttonTextNomarl
              style={{ color: 'white' }}
            >
              {language?.cancel}
            </TextCom>
          </TouchableOpacity>
        </View>
      </ModelCom>
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
  modalCon: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  image: {
    width: 150 * rate,
    height: 150 * rate,
    // borderWidth: 1,
    // marginBottom: -25 * rate,

  },
})
