import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, SectionList,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import YouTube from 'react-native-youtube'
import BackGroundCom from '../../components/backgroundCom'
import { HeaderCom, TextCom } from '../../components'
import { API_URL } from '../../configs'
import VideoItem from './videoItem'

const { width } = Dimensions.get('window')
const rate = width / 375
const LearningScreen = (props) => {
  const { name, id, youtubeId } = props.route.params.item

  const theme = useSelector((state) => state.storage.theme)
  const [data, setData] = useState([])
  const [videoUrl, setVideoUrl] = useState(youtubeId)
  const [title, setTitle] = useState('')
  const [videoId, setVideoID] = useState('')
  useEffect(async () => {
    const result = await axios.get(`${API_URL}/course/${id}`)
    setData(result.data.data)
  }, [])
  const handleWatchVideo = (item) => {
    console.log(item)
    setVideoUrl(item.youtubeId)
    setTitle(item.name)
    setVideoID(item.id)
  }
  return (
    <BackGroundCom>
      <HeaderCom text={name} />
      <YouTube
        videoId={videoUrl} // The YouTube video ID
        apiKey="AIzaSyDHVkWSbg1Qw0IO7F9tt-g8pqf88D9zg_A"
        play // control playback of video with true/false
        // fullscreen // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        // onReady={(e) => this.setState({ isReady: true })}
        // onChangeState={(e) => this.setState({ status: e.state })}
        // onChangeQuality={(e) => this.setState({ quality: e.quality })}
        // onError={(e) => this.setState({ error: e.error })}
        style={{ width: 345 * rate, height: 220 * rate }}
      />

      <TextCom
        textPrimary
        headingMedium
        style={{ width: 345 * rate, marginTop: 10 }}
      >
        {title}
      </TextCom>
      <TextCom
        textPrimary
        contenTextBold
      // style={{ width: 345 * rate }}
      >
        noi dung khoa hoc
      </TextCom>
      <SectionList
        stickySectionHeadersEnabled
        style={{ width: 345 * rate }}
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: item.id === videoId ? theme.backgroundSecondary : 'white', borderRadius: 10, width: 320 * rate, alignSelf: 'center',
              }}
              onPress={() => { handleWatchVideo(item) }}
            >
              <VideoItem item={item} />
            </TouchableOpacity>
          )
        }}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ backgroundColor: theme.backgroundSecondary, paddingHorizontal: 10 }}>
            <TextCom
              textPrimary
              headingMedium
            >
              {title}
            </TextCom>
          </View>
        )}
      />
    </BackGroundCom>
  )
}

export default LearningScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
