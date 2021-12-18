import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Store';

import StackNavigation from './navigation/StackNavigation';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors} from './theme/colors';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar
            backgroundColor={colors.success}
            barStyle="light-content"
          />
          <StackNavigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
