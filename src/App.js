import 'react-native-gesture-handler';
import * as React from 'react';
import Routes from '~/routes';
import {useAuth} from '~/contexts/auth';

import {StatusBar} from 'expo-status-bar';
import commonStyles from '~/assets/styles/commonStyles';
import {AppContainer, FakeStatusBar} from '~/components/styledComponents';

const App = () => {
  const {signed, signOut} = useAuth();
  return (
    <>
      <FakeStatusBar
        color={signed ? commonStyles.colors.gold : commonStyles.colors.white}
      />
      <AppContainer
        color={signed ? commonStyles.colors.white : commonStyles.colors.white}>
        <StatusBar
          translucent
          animated="fade"
          style={signed ? 'dark' : 'dark'}
        />
        <Routes />
      </AppContainer>
    </>
  );
};

export default App;
