import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Store';
import {colors} from './theme/colors';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar
            backgroundColor={colors.primary}
            barStyle="light-content"
          />
          <StackNavigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
