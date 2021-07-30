import React from 'react'
import {
  View, SafeAreaView, StyleSheet, StatusBar,
} from 'react-native'
import { useSelector } from 'react-redux'

const BackGroundCom = ({ children, style, ...props }) => {
  const theme = useSelector((state) => state.storage.theme)

  return (
    <View
      style={[styles.container, style, { backgroundColor: theme.backgroundPrimary }]}
      {...props}
    >
      <StatusBar
        backgroundColor={theme?.backgroundPrimary}
        barStyle={theme.darkMode ? 'light-content' : 'dark-content'}
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
