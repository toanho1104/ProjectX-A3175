// import Reactotron from 'reactotron-react-native'
import { en, vi } from '../../assets/languages'
import { darkColors, lightColors } from '../../assets/styles'
import { languageTypes, themeTypes } from '../types'

const initState = {
  token: '',
  language: {},
  theme: {},
}

const storageReducer = (state = initState, action) => {
  switch (action.type) {
    case languageTypes.CHANGE_LANGUAGES:
      console.log(action?.payload?.data.id)
      if (action?.payload?.data.id === 'en') {
        return { ...state, language: en }
      }
      if (action?.payload?.data.id === 'vi') {
        return { ...state, language: vi }
      }
      return state
    case themeTypes.CHANGE_THEMES:
      if (action?.payload?.data.id === 'dark') {
        return { ...state, theme: darkColors }
      }
      if (action?.payload?.data.id === 'light') {
        return { ...state, theme: lightColors }
      }
      return state
    default:
      return state
  }
}

export default storageReducer
