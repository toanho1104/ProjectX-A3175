import { courseTypes } from '../types'

export const getCourse = (data, callback) => {
  return {
    type: courseTypes.GET_COUSER,
    payload: { data, callback },
  }
}

export const courseRegister = (data, header, callback) => {
  return {
    type: courseTypes.COUSER_REGISTER,
    payload: { data, header, callback },
  }
}
export const courseUnregister = (data, header, callback) => {
  return {
    type: courseTypes.COUSER_UNREGISTER,
    payload: { data, header, callback },
  }
}
