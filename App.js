import React from "react"
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import StackNavigator from "./StackNavigator"
import SplashScreen from 'react-native-splash-screen' 
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import rootReducer from "./src/stores/rootReducer"

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <Provider store={store}>
      <NavigationContainer >
        <StackNavigator/>
      </NavigationContainer>
    </Provider>
  )
}
