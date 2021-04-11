import React from 'react';
import App from './App';

import 'react-native-gesture-handler';
import {AuthProvider} from '~/contexts/auth';
import {NavigationContainer} from '@react-navigation/native';

const Application = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <App />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Application;
