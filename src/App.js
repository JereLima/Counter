import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Store';

import StackNavigation from './navigation/StackNavigation';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar hidden />
        <StackNavigation />
      </PersistGate>
    </Provider>
  );
}
