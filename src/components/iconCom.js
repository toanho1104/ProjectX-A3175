import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'

import { useSelector } from 'react-redux'

const { width } = Dimensions.get('window')
const rate = width / 375
const IconCom = ({ source }) => {
  const theme = useSelector((state) => state.storage.theme)
  return (
    <FastImage
      source={source}
      style={styles.container}
      tintColor={theme.iconPrimary}
    />
  )
}

export default IconCom

const styles = StyleSheet.create({
  container: {
    width: 30 * rate,
    height: 30 * rate,
  },
})
