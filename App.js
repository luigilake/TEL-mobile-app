import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Main from './src/Main'
import store from './src/store'

const App = props => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
