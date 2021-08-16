import { combineReducers } from 'redux'
import storage from './storage'
import categories from './category'
import courses from './course'
import user from './user'

const appReducer = combineReducers({
  storage,
  categories,
  courses,
  user,

})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state.storage.token = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
