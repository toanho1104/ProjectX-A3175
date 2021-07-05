import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomTabBarCom from './BottomTabBar'
import { screenName } from '../../configs'
import { Explore, Search } from '../../screens'

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
        options={{ title: 'Khám phá' }}
      />
      <Tab.Screen
        name={screenName.Search}
        component={Search}
        options={{ title: 'Sản phẩm' }}
      />
      {/* <Tab.Screen
        name={screenName.CartScreen}
        component={CartScreen}
        options={{ title: 'Giỏ hàng' }}
      />
      <Tab.Screen
        name={screenName.AccountScreen}
        component={AccountScreen}
        options={{ title: 'Tài khoản' }}
      /> */}

    </Tab.Navigator>
  )
}
export default BottomTabBarRoute
