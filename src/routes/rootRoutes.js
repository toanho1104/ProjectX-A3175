import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { useSelector } from 'react-redux'
import { navigationRef } from '../utils/NavigationHelpers'
import { screenName } from '../configs'
import BottomTabBarRoute from './bottomTab/BottomTabBarRoutes'
import {
  CourseDetailsScreen, LoginScreen, Splash, Wellcome,
} from '../screens'
import DetailsCourseListScreen from '../screens/detailsCourseList'
import SearchRoutes from './searchRoutes'
// import HOC from '../screens/HOC'

const Stack = createStackNavigator()

const RootRoutes = () => {
  const token = useSelector((state) => state.storage.token)
  return (
    <NavigationContainer
      ref={navigationRef}

    >
      <Stack.Navigator
        // mode="modal"
        screenOptions={{
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
          // gestureEnabled: true,
          // gestureDirection: 'horizontal',
          // ...TransitionPresets.RevealFromBottomAndroid,

          // swipeEnabled: false,
          // animationEnabled: false,
          // lazy: false,

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
        {token ? (<>
          <Stack.Screen name={screenName.Splash} component={Splash} />
          <Stack.Screen name={screenName.LoginScreen} component={LoginScreen} />
          <Stack.Screen name={screenName.BottomTabBarRoute} component={BottomTabBarRoute} />
          <Stack.Screen name={screenName.CourseDetailsScreen} component={CourseDetailsScreen} />
          {/* <Stack.Screen name={screenName.DetailsCourseListScreen} component={DetailsCourseListScreen} /> */}
          {/* <Stack.Screen name={screenName.SearchRoutes} component={SearchRoutes} /> */}
        </>)
          : (<>
            <Stack.Screen name={screenName.Splash} component={Splash} />
            <Stack.Screen name={screenName.LoginScreen} component={LoginScreen} />
            <Stack.Screen name={screenName.Wellcome} component={Wellcome} />
            <Stack.Screen name={screenName.BottomTabBarRoute} component={BottomTabBarRoute} />
            <Stack.Screen name={screenName.CourseDetailsScreen} component={CourseDetailsScreen} />
            {/* <Stack.Screen name={screenName.DetailsCourseListScreen} component={DetailsCourseListScreen} /> */}
            {/* <Stack.Screen name={screenName.SearchRoutes} component={SearchRoutes} /> */}

          </>)}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootRoutes
