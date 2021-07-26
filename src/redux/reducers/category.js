import { categoryTypes } from '../types'

const initState = {
  courseCategoryList: [],
}

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case categoryTypes.GET_COUSER_CATEGORY_SUCCESS:
      return { ...state, courseCategoryList: [...action.payload.data] }

    default:
      return state
  }
}

export default categoryReducer
