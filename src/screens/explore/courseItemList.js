import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IconCom, TextCom } from '../../components'
import { icons } from '../../assets/icons'
import { dateFormat } from '../../common'

const { width } = Dimensions.get('window')
const rate = width / 375
const CoureItemList = ({ item }) => {
  const theme = useSelector((state) => state.storage.theme)
  const {
    name, posterUrl, rating, fullName, avatarUrl, description, createdAt,
  } = item

  const renderStar = (num) => {
    console.log(typeof num)
    const starArr = []
    const dec = num % 1
    const int = Math.floor(num)
    for (let i = 0; i < 5; i++) {
      if (i < int) {
        starArr.push(<IconStar source={icons.starFill} />)
      } else if (i === int && dec !== 0) {
        starArr.push(<IconStar source={icons.starHalf} />)
      } else {
        starArr.push(<IconStar source={icons.star} />)
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
  return (
    <View style={styles.container}>
      <FastImage
        source={{ uri: posterUrl }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <TextCom
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
        <TextCom style={{ marginLeft: 5 }}>
          {rating}
        </TextCom>
      </View>

      <View style={{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'flex-start',
      }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <FastImage
            source={{ uri: avatarUrl }}
            style={styles.avatar}
          />
          <TextCom
            contenTextRegular
            style={styles.titleText}
          >
            {fullName}
          </TextCom>
        </View>

        <TextCom
          style={{ opacity: 0.4 }}
          contenTextItalic
        >
          {dateFormat(createdAt)}
        </TextCom>
      </View>

      <View style={{
        alignSelf: 'flex-start', marginTop: 5, padding: 7, backgroundColor: '#FFEB3B', borderRadius: 10,
      }}
      >
        <TextCom
          style={{}}
          textPrimary
          contenTextBold
        >
          Free
        </TextCom>
      </View>
    </View>
  )
}

export default CoureItemList

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // borderWidth: 1,
    marginLeft: (width - 345 * rate) / 2,
    width: 230 * rate,
  },
  image: {
    width: 230 * rate,
    height: 150 * rate,
    borderRadius: 10,
  },
  avatar: {
    width: 25 * rate,
    height: 25 * rate,
    borderRadius: 20,
    marginRight: 5,
  },
  titleText: {
    opacity: 0.7,
    alignSelf: 'flex-start',
  },
  starView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
})