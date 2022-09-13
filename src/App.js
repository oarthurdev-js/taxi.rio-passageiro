import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from './screens/LoginPage/index';
import Verification from './screens/Verification';
import End from './screens/Finish';
import HomePage from './screens/HomePage';
import Discounts from './screens/Discounts';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Finish"
          component={End}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Discounts"
          component={Discounts}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
