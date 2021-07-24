/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Provider } from 'react-redux'
import RootRoutes from './src/routes/rootRoutes'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <RootRoutes />
    </Provider>
  )
}

export default App
