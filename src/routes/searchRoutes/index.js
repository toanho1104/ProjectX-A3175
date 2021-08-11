import React, { useState, useEffect } from 'react'
import {
  View, Dimensions, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reactotron from 'reactotron-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { screenName } from '../../configs'
import { navigationRef } from '../../utils/NavigationHelpers'
import { DetailsCourseList, Search } from '../../screens'
import DetailsCourseListScreen from '../../screens/detailsCourseList'

const { width } = Dimensions.get('window')
const rate = width / 375
const SearchRoutes = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.2],
              extrapolate: 'clamp',
            }),
          },
        }),

      }}
    >

      <Stack.Screen name={screenName.Search} component={Search} />
      <Stack.Screen name={screenName.DetailsCourseListScreen} component={DetailsCourseListScreen} />

    </Stack.Navigator>

  )
}
export default SearchRoutes
