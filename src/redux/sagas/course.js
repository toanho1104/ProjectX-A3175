import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'
import { categoryTypes, courseTypes } from '../types'
import { API_URL } from '../../configs'

export default function* categorySaga() {
  yield takeLatest(courseTypes.GET_COUSER, getCourse)
}
function* getCourse(action) {
  const { data, callback } = action?.payload
  try {
    const response = yield call(() => axios.get(`${API_URL}/course`))
    if (response?.data?.success) {
      yield put({
        type: courseTypes.GET_COUSER_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    console.log(error)
    callback(error?.response.data)
  }
}
