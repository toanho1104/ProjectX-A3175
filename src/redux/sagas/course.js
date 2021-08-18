import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'
import { categoryTypes, courseTypes } from '../types'
import { API_URL } from '../../configs'

export default function* categorySaga() {
  yield takeLatest(courseTypes.GET_COUSER, getCourse)
  yield takeLatest(courseTypes.COUSER_REGISTER, courseRegister)
  yield takeLatest(courseTypes.COUSER_UNREGISTER, courseUnregister)
}
function* getCourse(action) {
  const { data, callback } = action?.payload
  try {
    const response = yield call(() => axios.get(`${API_URL}/course`, data,))
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
function* courseRegister(action) {
  const { data, header, callback } = action?.payload

  try {
    const response = yield call(() => axios.post(`${API_URL}/course/LearnList`, data, header))
    if (response?.data?.success) {
      yield put({
        type: courseTypes.COUSER_UNREGISTER_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    console.log(error)
    callback(error?.response.data)
  }
}
function* courseUnregister(action) {
  const { data, header, callback } = action?.payload
  try {
    const response = yield call(() => axios.delete(`${API_URL}/course/LearnList/${data.id}`, header))
    if (response?.data?.success) {
      yield put({
        type: courseTypes.COUSER_REGISTER_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    console.log(error)
    callback(error?.response.data)
  }
}
