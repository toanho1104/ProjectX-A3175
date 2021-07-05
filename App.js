/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { View, Text } from 'react-native'
import Reactotron from 'reactotron-react-native'
import RootRoutes from './src/routes/rootRoutes'

const App = () => {
  // console.tron('a')
  Reactotron.log('hello rendering world')
  return (
    <RootRoutes />
  )
}

export default App
