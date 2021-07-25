import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import * as Animatable from 'react-native-animatable'

import DropDownPicker from 'react-native-dropdown-picker'
import { BackGroundView, TextCom } from '../../components/index'
import { images } from '../../assets/images'
import { languesActions } from '../../redux/actions'

const { width, height } = Dimensions.get('window')
const rate = width / 375
const Slide1 = () => {
  console.log('Slide1')
  const dispatch = useDispatch()
  const language = useSelector((state) => state.storage.language)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: language.vietnamese, value: 'vi' },
    { label: language.English, value: 'en' },
  ])
  useEffect(() => {

  }, [])

  const changeLangues = (val) => {
    dispatch(languesActions.changeLangues({
      id: val,
    }))
    console.log('value', val)
  }
  return (
    <BackGroundView>
      <View style={styles.imageView}>
        <LottieView
          source={images.hello}
          autoPlay
          loop
          style={styles.image}
        />
      </View>
      <View
        animation="bounceInUp"
        delay={100}
      >
        <TextCom
          textPrimary
          headingLarge
        >
          {language.hello}
        </TextCom>
      </View>
      <TextCom />

      <View
        animation="fadeIn"
        delay={400}
        style={{ width: 300 * rate }}
      >
        <TextCom
          textPrimary
          contenTextRegular
          style={{ textAlign: 'center' }}
        >
          {language.slide1Content1}
        </TextCom>

      </View>
      <View style={styles.viewOption}>
        <TextCom
          textPrimary
        >
          {language.language}
        </TextCom>
        <DropDownPicker
          theme="LIGHT"
          containerStyle={{
            width: 170,
          }}
          dropDownContainerStyle={{
            backgroundColor: '#dfdfdf',
            width: 170,
          }}
          placeholder={language.languageHonder}
          open={open}
          value={value}
          items={[
            { label: language.vietnamese, value: 'vi' },
            { label: language.English, value: 'en' },
          ]}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={(val) => {
            changeLangues(val)
          }}
        />
      </View>

      <Animatable.View
        animation="bounceInRight"
        delay={600}
        style={{ position: 'absolute', bottom: 70 * rate, opacity: 0.6 }}
      >
        <TextCom
          textPrimary
          contenTextItalic
        >
          {language.slide1Content3}
        </TextCom>
      </Animatable.View>

    </BackGroundView>
  )
}

export default Slide1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageView: {
    marginTop: 50 * rate,
    width: 150 * rate,
    height: 150 * rate,
    marginBottom: -25,
  },
  image: {
    width: 150 * rate,
    height: 150 * rate,
    // borderWidth: 1,
    // marginBottom: -25 * rate,

  },
  viewOption: {
    width: 300 * rate,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: height / 2 - 30,
  },
})
