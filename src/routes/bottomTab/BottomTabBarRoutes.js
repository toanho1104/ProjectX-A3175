import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import BottomTabBarCom from './BottomTabBar'
import { screenName } from '../../configs'
import {
  Explore, Love, Search, User,
} from '../../screens'
import SearchRoutes from '../searchRoutes'

const Tab = createBottomTabNavigator()
const BottomTabBarRoute = () => {
  const language = useSelector((state) => state.storage.language)
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBarCom {...props} />}
      screenOptions={{ headerShown: false }}

    >
      <Tab.Screen
        name={screenName.Explore}
        component={Explore}
        options={{ title: language.explore }}

      />
      <Tab.Screen
        name={screenName.SearchRoutes}
        component={SearchRoutes}
        options={{ title: language.search }}
      />
      <Tab.Screen
        name={screenName.Love}
        component={Love}
        options={{ title: language.wishList }}
      />
      <Tab.Screen
        name={screenName.User}
        component={User}
        options={{ title: language.user }}
      />

    </Tab.Navigator>
  )
}
export default BottomTabBarRoute
