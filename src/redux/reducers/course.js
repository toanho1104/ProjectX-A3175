import { courseTypes } from '../types'

const initState = {
  courseList: [],
}

const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case courseTypes.GET_COUSER_SUCCESS:
      return { ...state, courseList: [...action.payload.data] }
    case courseTypes.COUSER_REGISTER_SUCCESS:
      return { ...state, courseList: [...action.payload.data] }
    case courseTypes.COUSER_UNREGISTER_SUCCESS:
      return { ...state, courseList: [...action.payload.data] }
    default:
      return state
  }
}

export default courseReducer
