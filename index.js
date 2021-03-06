/**
 * @format
 */
import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

if (__DEV__) {
  import('./src/configs/ReactotronConfig').then(() => console.log('Reactotron Configured'))
} else {
  console.tron = { log: () => true }
}

AppRegistry.registerComponent(appName, () => App)
