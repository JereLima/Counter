import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListCounter from '../screens/ListCounter';
import DetailsCounter from '../screens/DetailsCounter';

const Stack = createNativeStackNavigator();
const headerOff = {headerShown: false};

const StackNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListCounter} options={headerOff} />
      <Stack.Screen
        name="Details"
        component={DetailsCounter}
        options={headerOff}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigation;
