import { createStore, applyMiddleware, compose } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
// import createEncryptor from 'redux-persist-transform-encrypt'
import createSagaMiddleware from 'redux-saga'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootReducer from '../reducers'
import Reactotron from '../../configs/ReactotronConfig'
// import rootSaga from '../sagas'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['storage'],
  // stateReconciler: autoMergeLevel2,
  // transforms: [encryptor],
}
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = compose
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeEnhancers(
  Reactotron.createEnhancer(),
  applyMiddleware(sagaMiddleware)
))
// sagaMiddleware.run(rootSaga)
// persistStore(store).purge()
persistStore(store)
export default store
