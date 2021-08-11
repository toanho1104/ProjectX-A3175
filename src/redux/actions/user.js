import { userTypes } from '../types'

export const userLogin = (data, callback) => {
  return {
    type: userTypes.USER_LOGIN,
    payload: { data, callback },
  }
}
