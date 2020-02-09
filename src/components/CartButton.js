import React from 'react';

import PropTypes from 'prop-types';

import commonStyles from '~/assets/styles/commonStyles'
import {
    ArrowButtonContainer,
    ArrowButtonText,
} from './styledComponents';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function CartButton({ count, ...rest }) {
    if (count < 2)
        return (
            <ArrowButtonContainer backgroundColor={commonStyles.colors.transparent} {...rest}>
                <Icon name={'cart-outline'} size={28} color={commonStyles.colors.black} />
                <ArrowButtonText>{`${count} item adicionado!`}</ArrowButtonText>
            </ArrowButtonContainer>
        );
    else
        return (
            <ArrowButtonContainer backgroundColor={commonStyles.colors.transparent} {...rest}>
                <Icon name={'cart-outline'} size={28} color={commonStyles.colors.black} />
                <ArrowButtonText>{`${count} items adicionados!`}</ArrowButtonText>
            </ArrowButtonContainer>
        );
}

CartButton.propTypes = {
    count: PropTypes.number.isRequired,
}