import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import { AppWrapCentered } from './styles';

export default function AppLoding({ color, ...rest }) {
    return (
        <AppWrapCentered>
            <ActivityIndicator style={rest} size="large" color={color} />
        </AppWrapCentered>
    );
}

AppLoding.propTypes = {
    color: PropTypes.string.isRequired
}