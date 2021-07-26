import { combineReducers } from 'redux'
import storage from './storage'
import categories from './category'

const appReducer = combineReducers({
  storage,
  categories,

})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
