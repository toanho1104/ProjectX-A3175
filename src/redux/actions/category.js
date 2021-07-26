import { categoryTypes } from '../types'

export const getCategoryCouser = (data, callback) => {
  console.log('acction')
  return {

    type: categoryTypes.GET_COUSER_CATEGORY,
    payload: { data, callback },
  }
}
