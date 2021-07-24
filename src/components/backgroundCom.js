import React from 'react'
import {
  View, SafeAreaView, StyleSheet, StatusBar,
} from 'react-native'
import { useSelector } from 'react-redux'

const BackGroundCom = ({ children, style }) => {
  const theme = useSelector((state) => state.storage.theme)
  return (
    <View style={[styles.container, style, { backgroundColor: theme.backgroundPrimary }]}>
      <StatusBar
        backgroundColor={theme.backgroundPrimary}
        barStyle="dark-content"
      />
      <SafeAreaView />
      {children}
    </View>
  )
}

export default BackGroundCom

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})