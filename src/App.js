import React from 'react';
import Routes from '~/routes';

import {StatusBar} from 'expo-status-bar';
import commonStyles from '~/assets/styles/commonStyles';
import {AppContainer} from '~/components/styledComponents';

export default function App() {
  return (
    <AppContainer color={commonStyles.colors.white}>
      <StatusBar style="light" animated="fade" translucent />
        <Routes />
    </AppContainer>
  );
}
