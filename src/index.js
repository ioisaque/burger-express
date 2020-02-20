import React from 'react';
import '~/config/ReactotronConfig';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar, YellowBox} from 'react-native';

// import {store, persistor} from '~/store';
import Routes from '~/routes';
import commonStyles from './assets/styles/commonStyles';
import {AppContainer} from './components/styledComponents';

YellowBox.ignoreWarnings(['VirtualizedLists', 'forwardRef']);

const App = () => (
  // <Provider store={store}>
  // <PersistGate persistor={persistor}>
  <AppContainer>
    <StatusBar
      barStyle="dark-content"
      backgroundColor={commonStyles.colors.gold}
    />
    <Routes />
  </AppContainer>
  // </PersistGate>
  // </Provider>
);

export default App;
