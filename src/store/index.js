import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middlewares = [sagaMiddleware];

export const store = createStore(persistReducers(rootReducer), middlewares);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
