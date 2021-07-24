import React from 'react'
import {
  View, Image, Dimensions, SafeAreaView, Text, TouchableOpacity,
} from 'react-native'
import { useSelector } from 'react-redux'
import { colors, fonts } from '../../assets/styles'
import { TextCom } from '../../components'

import { bottom_tab_data } from '../../configs'

const { width } = Dimensions.get('window')
const rate = width / 375

const BottomTabBarCom = ({ state, descriptors, navigation }) => {
  const theme = useSelector((state) => state.storage.theme)

  const focusedOptions = descriptors[state.routes[state.index].key].options
  if (focusedOptions.tabBarVisible === false) {
    return null
  }
  // React.useEffect(() => {
  //   console.log('a')
  //   return () => {
  //     console.log('lg')
  //   }
  // }, [focusedOptions])
  // console.log(focusedOptions)
  return (
    <SafeAreaView>
      <View style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1.45,
        shadowRadius: 4.65,

        elevation: 1,
        height: 0.5,
      }}
      />
      <View style={{
        flexDirection: 'row',
        backgroundColor: theme.backgroundPrimary,
        justifyContent: 'space-around',
        alignItems: 'center',
        width,
        height: 60 * rate,
        zIndex: 10,
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
              // activeOpacity={0.1}
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
                  tintColor: isFocused ? theme.primary : theme.iconPrimary,
                }}
                resizeMode="contain"
              />
              {isFocused && <TextCom
                textBottomTab
              >
                {label}
              </TextCom>}
            </TouchableOpacity>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

export default BottomTabBarCom
