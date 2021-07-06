import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomTabBarCom from './BottomTabBar'
import { screenName } from '../../configs'
import I18n from '../../languages'
import {
  Explore, Love, Search, User,
} from '../../screens'

const Tab = createBottomTabNavigator()
const BottomTabBarRoute = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBarCom {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name={screenName.Explore}
        component={Explore}
        options={{ title: I18n.t('explore') }}
      />
      <Tab.Screen
        name={screenName.Search}
        component={Search}
        options={{ title: I18n.t('search') }}
      />
      <Tab.Screen
        name={screenName.Love}
        component={Love}
        options={{ title: 'Giỏ hàng' }}
      />
      <Tab.Screen
        name={screenName.User}
        component={User}
        options={{ title: 'Tài khoản' }}
      />

    </Tab.Navigator>
  )
}
export default BottomTabBarRoute
