import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'
import { userTypes } from '../types'
import { API_URL } from '../../configs'

export default function* categorySaga() {
  yield takeLatest(userTypes.USER_LOGIN, login)
}
function* login(action) {
  const { data, callback } = action?.payload

  try {
    const response = yield call(() => axios.post(`${API_URL}/auth/signIn`, data))
    if (response?.data?.success) {
      yield put({
        type: userTypes.USER_LOGIN_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    console.log(error)
    callback(error?.response.data)
  }
}
