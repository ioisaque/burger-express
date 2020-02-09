import React from 'react';
import { Text, View } from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { styles } from './styledComponents';
import commonStyles from '~/assets/styles/commonStyles';

export default function EmptyList({ icon, message }) {
    return ( 
        <View style={styles.inlineItems}>
            {icon && <Icon name={icon} size={20} color={commonStyles.colors.darkBlue} />}
            <Text style={styles.boldText}>{message ? message : '...'}</Text>
        </View>
    );
}

EmptyList.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

EmptyList.defaultProps = {
    icon: false,
    message: false,
}