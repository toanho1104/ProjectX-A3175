import React from 'react'
import {
  View, Image, Dimensions, SafeAreaView, Text, TouchableOpacity, StyleSheet,
} from 'react-native'
import { colors, fonts } from '../../assets/styles'

import { bottom_tab_data } from '../../configs'

const { width } = Dimensions.get('window')
const rate = width / 375

const BottomTabBarCom = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options
  if (focusedOptions.tabBarVisible === false) {
    return null
  }
  return (
    <SafeAreaView>
      <View style={{
        flexDirection: 'row',
        backgroundColor: colors.background,
        justifyContent: 'space-around',
        alignItems: 'center',
        width,
        height: 60 * rate,
        // borderTopWidth: 1 * StyleSheet.hairlineWidth,
        // borderTopColor: colors.iconPrimary,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1,
      }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          return (
            <TouchableOpacity
              onPress={onPress}
              key={`tabbar-${route.key}`}
              style={{
                flex: 1, alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Image
                source={bottom_tab_data[index].image}
                style={{
                  width: 25,
                  height: 25,
                  marginBottom: 4,
                  tintColor: isFocused ? colors.primary : colors.iconPrimary,
                }}
                resizeMode="contain"
              />
              {isFocused && <Text
                style={{
                  color: colors.primary,
                  ...fonts.Bold,
                }}
              >
                {label}
              </Text>}
            </TouchableOpacity>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

export default BottomTabBarCom
