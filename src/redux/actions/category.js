import { categoryTypes } from '../types'

export const getCategoryCourse = (data, callback) => {
  return {
    type: categoryTypes.GET_COURSE_CATEGORY,
    payload: { data, callback },
  }
}
