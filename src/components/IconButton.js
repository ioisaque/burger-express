import React from 'react';
import PropTypes from 'prop-types';
import commonStyles from '~/assets/styles/commonStyles'

import { ButtonContainer } from './styledComponents';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Button({ icon, ...rest }) {
    return (
        <ButtonContainer {...rest} backgroundColor="transparent">
            <Icon name={icon} size={28} color={commonStyles.colors.darkBlue} />
        </ButtonContainer>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired
}