import React from 'react';
import '~/config/StatusBarConfig';
import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import {YellowBox} from 'react-native';

// import store from '~/store'
import Routes from '~/routes';

YellowBox.ignoreWarnings(['VirtualizedLists']);

const App = () => (
  // <Provider store={store}>
  <Routes />
  // </Provider>
);

export default App;
