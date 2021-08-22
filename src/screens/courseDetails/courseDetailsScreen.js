import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, Animated, ScrollView, SectionList,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { SharedElement } from 'react-navigation-shared-element'
import Video from 'react-native-video'
import YouTube from 'react-native-youtube'
import RenderHtml from 'react-native-render-html'
import {
  BackGroundView, HeaderCom, LoadingCom, TextCom,
} from '../../components'
import { API_URL, screenName } from '../../configs'
import { NavigationHelpers } from '../../utils'
import { courseActions } from '../../redux/actions'

const { width } = Dimensions.get('window')
const rate = width / 375
const CourseDetailsScreen = (props) => {
  const dispatch = useDispatch()
  const { item } = props?.route?.params
  const {
    id, name, description, youtubeId, isLearning,
  } = item
  const token = useSelector((state) => state.storage.token)
  const language = useSelector((state) => state.storage.language)
  const theme = useSelector((state) => state.storage.theme)
  const [learning, setLearning] = useState(isLearning)
  const [detailsCourse, setDetailesCourse] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    const responses = await axios.get(`${API_URL}/course/detailCourse/${id}`)
    setDetailesCourse(responses?.data?.data?.content)
  }, [])

  const handleRegistration = () => {
    if (token) {
      if (isLearning) {
        setLoading(true)
        dispatch(courseActions.courseUnregister({
          id: item.id,
        }, {
          headers: { token },
        }, (resCourse) => {
          setLearning(false)
          setLoading(false)
        }))
      } else {
        setLoading(true)
        dispatch(courseActions.courseRegister({
          courseId: item.id,
        }, {
          headers: { token },
        }, (resCourse) => {
          setLearning(true)
          setLoading(false)
          NavigationHelpers.navigateToScreen(screenName.MyCourse)
        }))
      }
    } else {
      Alert.alert(
        language?.message,
        language?.messLogin,

        [
          {
            text: language?.cancel,
            // onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: language?.ok,
            onPress: () => handleToLoginScreen(),
          },
        ]
      )
    }
  }

  const handleToLoginScreen = () => {
    NavigationHelpers.navigateToScreenAndReplace(screenName.Wellcome)
  }

  return (
    <BackGroundView>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <HeaderCom text={language?.courseDetails} />
        {/* <SharedElement id={`item.${ item.id }.photo`}> */}
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
          {name}
        </TextCom>
        <TextCom
          textPrimary
          contenTextRegular
          style={styles.desText}
        >
          {description}
        </TextCom>

        {/* <Video
          source={{ uri: 'https://www.fshare.vn/file/XCO21O2YCLM5?token=1627664710.mp4' }} // Can be a URL or a local file.
          // ref={(ref) => {
          //   Video = ref
          // }}
          // onBuffer={this.onBuffer} 
          // onError={this.videoError} 
          style={styles.backgroundVideo}
        /> */}
        <YouTube
          videoId={youtubeId} // The YouTube video ID
          apiKey="AIzaSyDHVkWSbg1Qw0IO7F9tt-g8pqf88D9zg_A"
          // play // control playback of video with true/false
          // fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          // onReady={(e) => this.setState({ isReady: true })}
          // onChangeState={(e) => this.setState({ status: e.state })}
          // onChangeQuality={(e) => this.setState({ quality: e.quality })}
          // onError={(e) => this.setState({ error: e.error })}
          style={{ width: 345 * rate, height: 220 * rate }}
        />
        <View style={{ width: 345 * rate }}>
          <RenderHtml
            contentWidth={345 * rate}
            source={{
              html: detailsCourse,
            }}
            enableExperimentalMarginCollapsing
          />
        </View>

      </ScrollView>
      <View style={styles.footer}>

        <TouchableOpacity
          onPress={handleRegistration}
          style={[styles.footerButton, { backgroundColor: learning ? 'red' : theme.primary }]}
        >

          {learning
            ? <TextCom buttonTextBold textOnPrimary>
              {language.cancelRegistration}
            </TextCom>
            : <TextCom buttonTextBold textOnPrimary>
              {language.registration}
            </TextCom>}
        </TouchableOpacity>
      </View>
      <LoadingCom isShow={loading} />
    </BackGroundView>
  )
}
// CourseDetailsScreen.sharedElements = (props) => {
//   const item = props.params
//   return [{
//     id: `item.${ item.id }.photo`,
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
  backgroundVideo: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    width,
    height: 300,
  },
  footer: {
    // backgroundColor: 'red',
    width,
    height: 52 * rate,
    justifyContent: 'center',
    alignItems: 'center',

  },
  footerButton: {
    backgroundColor: 'yellow',
    width: 250 * rate,
    height: 38 * rate,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

})
