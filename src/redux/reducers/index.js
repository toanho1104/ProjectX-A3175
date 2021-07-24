import { combineReducers } from 'redux'
import storage from './storage'

const appReducer = combineReducers({
  storage,

})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
