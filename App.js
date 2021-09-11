import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './navigation/Navigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import mealsReducer from './store/reducer/meals';

const store = createStore(combineReducers({
  meals: mealsReducer
}));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onError={(error) => console.log(error)}
      onFinish={() => setDataLoaded(true)}
    />
  }

  return <Provider store={store}>
    <Navigator />
  </Provider>;
}
