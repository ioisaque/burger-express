import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '~/screens/Sign/';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
