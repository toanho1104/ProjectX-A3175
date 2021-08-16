/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Provider } from 'react-redux'
import FlashMessage from 'react-native-flash-message'
import RootRoutes from './src/routes/rootRoutes'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <RootRoutes />
      <FlashMessage position="top" />
    </Provider>
  )
}

export default App
