import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from '../utils/NavigationHelpers'
import { screenName } from '../configs'
import BottomTabBarRoute from './bottomTab/BottomTabBarRoutes'
import HOC from '../screens/HOC'

const Stack = createStackNavigator()

const RootRoutes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={screenName.BottomTabBarRoute} component={HOC(BottomTabBarRoute)} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootRoutes
