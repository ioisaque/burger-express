import React from 'react';
import { ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';

import commonStyles from '~/assets/styles/commonStyles'
import {
    ButtonContainer, 
    ButtonText,
} from './styledComponents';

export default function Button({ children, loading, ...rest }) {
    return (
        <ButtonContainer {...rest}>
            {loading ?
                <ActivityIndicator size="small" color={commonStyles.colors.white} />
                : <ButtonText>{children}</ButtonText>}
        </ButtonContainer>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    loading: PropTypes.bool
}

Button.defaultProps = {
    loading: false,
}