import 'react-native-gesture-handler';
import * as React from 'react';
import Routes from '~/routes';
import {useAuth} from '~/contexts/auth';
import {ClienteProvider} from '~/contexts/cliente';
import {CardapioProvider} from '~/contexts/cardapio';

import {StatusBar} from 'expo-status-bar';
import commonStyles from '~/assets/styles/commonStyles';
import {AppContainer, FakeStatusBar} from '~/components/styledComponents';

const App = () => {
  const {signed} = useAuth();
  return (
    <CardapioProvider>
      <ClienteProvider>
        <FakeStatusBar
          color={signed ? commonStyles.colors.gold : commonStyles.colors.white}
        />
        <AppContainer color={commonStyles.colors.white}>
          <StatusBar
            translucent
            animated="fade"
            style={signed ? 'dark' : 'dark'}
          />
          <Routes />
        </AppContainer>
      </ClienteProvider>
    </CardapioProvider>
  );
};

export default App;
