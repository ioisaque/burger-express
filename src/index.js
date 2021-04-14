import React from 'react';
import App from './App';

import 'react-native-gesture-handler';
import {AuthProvider} from '~/contexts/auth';
import {CardapioProvider} from '~/contexts/cardapio';
import {NavigationContainer} from '@react-navigation/native';

const Application = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CardapioProvider>
          <App />
        </CardapioProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Application;
