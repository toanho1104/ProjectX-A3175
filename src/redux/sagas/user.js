import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import Reactotron from 'reactotron-react-native'
import { userTypes } from '../types'
import { API_URL } from '../../configs'

export default function* categorySaga() {
  yield takeLatest(userTypes.USER_LOGIN, login)
  yield takeLatest(userTypes.GET_USER_INFO, getUserInfo)
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

function* getUserInfo(action) {
  const { data, callback } = action?.payload

  try {
    const response = yield call(() => axios.get(`${API_URL}/user/myInfo`, data))
    if (response?.data?.success) {
      yield put({
        type: userTypes.GET_USER_INFO_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    console.log(error)
    callback(error?.response.data)
  }
}
