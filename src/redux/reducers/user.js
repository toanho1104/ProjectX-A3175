import { userTypes } from '../types'

const initState = {
  userInfor: {},
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userTypes.GET_USER_INFO_SUCCESS:
      return { ...state, userInfor: { ...action.payload.data } }
    case userTypes.UPDATE_USER_INFO_SUCCESS:
      return { ...state, userInfor: { ...action.payload.data } }
    default:
      return state
  }
}

export default userReducer
