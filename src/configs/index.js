import { icons } from '../assets/icons'

export const screenName = {
  Splash: 'Splash',
  Wellcome: 'Wellcome',
  LoginScreen: 'LoginScreen',
  Explore: 'Explore',
  Search: 'Search',
  Love: 'Love',
  User: 'User',
  BottomTabBarRoute: 'BottomTabBarRoute',
}

export const bottom_tab_data = [
  {
    title: 'Khám phá',
    image: icons.explore,
  },
  {
    title: 'Tìm kiếm',
    image: icons.search,
  },
  {
    title: 'Yêu thích',
    image: icons.love,
  },
  {
    title: 'Tài khoản',
    image: icons.user,
  },
]
export const API_URL = 'http://192.168.1.17:8000/api'
