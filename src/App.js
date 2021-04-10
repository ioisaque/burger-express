import 'react-native-gesture-handler';
import * as React from 'react';
import Routes from '~/routes';
import {AuthProvider, useAuth} from '~/contexts/auth';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from 'expo-status-bar';
import commonStyles from '~/assets/styles/commonStyles';
import {AppContainer} from '~/components/styledComponents';

const App = () => {
  const {signed} = useAuth();
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppContainer
          color={signed ? commonStyles.colors.gold : commonStyles.colors.gold}>
          <StatusBar
            translucent
            animated="fade"
            style={signed ? 'dark' : 'dark'}
          />
          <Routes />
        </AppContainer>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
