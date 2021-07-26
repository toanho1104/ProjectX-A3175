import { all } from 'redux-saga/effects'
import userSaga from './user'
import categorySaga from './category'

export default function* rootSaga() {
  yield all([
    userSaga(),
    categorySaga(),
  ])
}
