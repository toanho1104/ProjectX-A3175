import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'
import { categoryTypes } from '../types'
import { API_URL } from '../../configs'

export default function* categorySaga() {
  // yield takeLatest(categoryTypes.GET_COUSER_CATEGORY, getCategoryCouser)
}
function* getCategoryCouser(action) {
  console.log('categorySaga')
  const { data, callback } = action?.payload
  const { } = data
  try {
    const response = yield call(() => axios.get('http://192.168.1.17:8000/api/courseCategory'))
    Reactotron.log(response)
  } catch (error) {
    console.log(error)
    // callback(error?.response.data)
  }
}
