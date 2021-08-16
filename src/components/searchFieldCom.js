import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { icons } from '../assets/icons'
import IconCom from './iconCom'

const { width } = Dimensions.get('window')
const rate = width / 375
const SearchFieldCom = ({
  string, handlerClearString, onPress, ...props
}) => {
  const [clearIcon, setClearIcon] = useState(false)
  useEffect(() => {
    if (string?.length === 0) {
      setClearIcon(false)
    } else { setClearIcon(true) }
  }, [string])
  const handleClearTextField = () => {
    handlerClearString('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewLeft}>
        <IconCom source={icons.searchField} />
        <TextInput
          style={styles.textInput}
          {...props}
        />
        {clearIcon
          && <TouchableOpacity onPress={handleClearTextField}>
            <IconCom
              source={icons.clear}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>}
      </View>
      <TouchableOpacity onPress={onPress} style={styles.viewRight}>
        <IconCom source={icons.mic} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchFieldCom

const styles = StyleSheet.create({
  container: {
    width: 345 * rate,
    height: 50 * rate,
    marginVertical: 10 * rate,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewLeft: {
    flex: 1,
    borderWidth: 1 * StyleSheet.hairlineWidth,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 5,
  },
  viewRight: {
    marginLeft: 10,
  },
})
