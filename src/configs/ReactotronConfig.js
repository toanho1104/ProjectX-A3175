import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

Reactotron.clear()
const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'Dms_Plus',
    host: 'localhost',
    port: 9090,
  })
  .useReactNative()
  .use(reactotronRedux())
  .connect()

console.tron = reactotron

export default reactotron
