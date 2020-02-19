import React from 'react';
// import '~/config/StatusBarConfig';
import '~/config/ReactotronConfig';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar, YellowBox} from 'react-native';

// import {store, persistor} from '~/store';
import Routes from '~/routes';
import commonStyles from './assets/styles/commonStyles';

YellowBox.ignoreWarnings(['VirtualizedLists']);

const App = () => (
  // <Provider store={store}>
  // <PersistGate persistor={persistor}>
  <>
    <StatusBar
      barStyle="dark-content"
      backgroundColor={commonStyles.colors.gold}
    />
    <Routes />
  </>
  // </PersistGate>
  // </Provider>
);

export default App;
