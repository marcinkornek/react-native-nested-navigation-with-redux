/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {RootNavigator} from './navigators/RootNavigator';
import {Provider} from 'react-redux';
import parentStore from './store/parentStore';

const App = () => {
  return (
    <Provider store={parentStore}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
