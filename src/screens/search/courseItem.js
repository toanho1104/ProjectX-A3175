import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, Animated,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'

import { SharedElement } from 'react-navigation-shared-element'
import { IconCom, TextCom } from '../../components'
import { icons } from '../../assets/icons'
import { dateFormat } from '../../common'
import { NavigationHelpers } from '../../utils'
import { screenName } from '../../configs'

const { width } = Dimensions.get('window')
const rate = width / 375
const CoureItem = ({ item, navigation }) => {
  const theme = useSelector((state) => state.storage.theme)
  const {
    name, posterUrl, rating, fullName, avatarUrl, description, createdAt,
  } = item

  const renderStar = (num) => {
    const starArr = []
    const dec = num % 1
    const int = Math.floor(num)
    for (let i = 0; i < 5; i++) {
      if (i < int) {
        starArr.push(<IconStar key={i} source={icons.starFill} />)
      } else if (i === int && dec !== 0) {
        starArr.push(<IconStar key={i} source={icons.starHalf} />)
      } else {
        starArr.push(<IconStar key={i} source={icons.star} />)
      }
    }
    return starArr
  }
  const IconStar = ({ source }) => {
    return (
      <View>
        <FastImage
          source={source}
          style={{ width: 16 * rate, height: 16 * rate }}
          tintColor="#edd03b"
        />
      </View>
    )
  }

  const handleToCourseDetails = () => {
    NavigationHelpers.navigateToScreen(screenName.CourseDetailsScreen, { item })
  }
  return (
    <TouchableOpacity
      onPress={handleToCourseDetails}
      style={styles.container}
    >

      <FastImage
        source={{ uri: posterUrl }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.infoView}>
        <TextCom
          textPrimary
          headingSmall
          numberOfLines={2}
          style={styles.titleText}
        >
          {name}
        </TextCom>

        <View style={styles.starView}>

          <View style={{ flexDirection: 'row' }}>
            {renderStar(rating)}
          </View>
          <TextCom
            textPrimary
            style={{ marginLeft: 5 }}
          >
            {rating}
          </TextCom>
        </View>

        <View style={styles.authorContentViewCon}>
          <View style={styles.authorContentView}>
            <FastImage
              source={{ uri: `data:image/png;base64,${avatarUrl}` }}
              style={styles.avatar}
            />
            <TextCom
              textPrimary
              contenTextRegular
              style={styles.titleText}
            >
              {fullName}
            </TextCom>
          </View>

          <TextCom
            style={{ opacity: 0.3 }}
            contenTextItalic
            textPrimary
          >
            {dateFormat(createdAt)}
          </TextCom>
        </View>

        <View style={styles.statusView}>
          <TextCom
            textOnSecondary
            contenTextBold
          >
            Free
          </TextCom>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CoureItem

const styles = StyleSheet.create({
  container: {
    width: 345 * rate,
    flexDirection: 'row',
    marginTop: 15 * rate,
  },
  image: {
    width: 100 * rate,
    height: 100 * rate,
    borderRadius: 10,
    marginRight: 10,
  },
  infoView: {
    flex: 1,
  },
  avatar: {
    width: 22 * rate,
    height: 22 * rate,
    borderRadius: 20,
    marginRight: 5,
  },
  titleText: {
    // opacity: 0.7,
    alignSelf: 'flex-start',
  },
  starView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  authorContentViewCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
  },
  authorContentView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  statusView: {
    alignSelf: 'flex-start',
    marginTop: 5,
    paddingHorizontal: 7,
    paddingVertical: 3,
    backgroundColor: '#FFEB3B',
    borderRadius: 10,
  },
})
