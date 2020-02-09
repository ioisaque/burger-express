import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import commonStyles from '../assets/styles/commonStyles';

export default props => {
    return (
        <Icon
            size={30}
            name={props.icon}
            color={props.focused ? commonStyles.colors.white : commonStyles.colors.black}
        />
    )
}