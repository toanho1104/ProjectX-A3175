import { userTypes } from '../types'

export const userLogin = (data, callback) => {
  return {
    type: userTypes.USER_LOGIN,
    payload: { data, callback },
  }
}
export const getUserInfo = (data, callback) => {
  return {
    type: userTypes.GET_USER_INFO,
    payload: { data, callback },
  }
}
