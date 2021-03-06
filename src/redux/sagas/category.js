import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'
import { categoryTypes } from '../types'
import { API_URL } from '../../configs'

export default function* categorySaga() {
  yield takeLatest(categoryTypes.GET_COURSE_CATEGORY, getCategoryCourse)
}
function* getCategoryCourse(action) {
  const { data, callback } = action?.payload
  try {
    const response = yield call(() => axios.get(`${API_URL}/courseCategory`))
    if (response?.data?.success) {
      yield put({
        type: categoryTypes.GET_COURSE_CATEGORY_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    console.log(error)
    callback(error?.response.data)
  }
}
