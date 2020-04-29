import React from 'react';
import {YellowBox} from 'react-native';
import App from './App';

YellowBox.ignoreWarnings(['VirtualizedLists', 'forwardRef']);

export default () => <App />;
