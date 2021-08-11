// import Reactotron from 'reactotron-react-native'
import { en, vi } from '../../assets/languages'
import { darkColors, lightColors } from '../../assets/styles'
import { languageTypes, themeTypes, userTypes } from '../types'

const initState = {
  token: '',
  language: {},
  theme: {},
}

const storageReducer = (state = initState, action) => {
  switch (action.type) {
    case userTypes.USER_LOGIN_SUCCESS:
      return { ...state, token: action?.payload?.data?.token }
    case languageTypes.CHANGE_LANGUAGES:
      if (action?.payload?.data.val === 'en') {
        return { ...state, language: en }
      }
      if (action?.payload?.data.val === 'vi') {
        return { ...state, language: vi }
      }
      return state
    case themeTypes.CHANGE_THEMES:
      if (action?.payload?.data.val === 'dark') {
        return { ...state, theme: darkColors }
      }
      if (action?.payload?.data.val === 'light') {
        return { ...state, theme: lightColors }
      }
      return state
    default:
      return state
  }
}

export default storageReducer
