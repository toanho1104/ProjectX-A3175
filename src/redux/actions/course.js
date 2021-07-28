import { courseTypes } from '../types'

export const getCourse = (data, callback) => {
  return {
    type: courseTypes.GET_COUSER,
    payload: { data, callback },
  }
}
