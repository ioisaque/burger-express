import 'react-native-gesture-handler';
import * as React from 'react';
import Routes from '~/routes';
import {useAuth} from '~/contexts/auth';

import {StatusBar} from 'expo-status-bar';
import commonStyles from '~/assets/styles/commonStyles';
import {AppContainer} from '~/components/styledComponents';

const App = () => {
  const {signed} = useAuth();
  return (
    <AppContainer
      color={signed ? commonStyles.colors.gold : commonStyles.colors.white}>
      <StatusBar translucent animated="fade" style="dark" />
      <Routes />
    </AppContainer>
  );
};

export default App;
