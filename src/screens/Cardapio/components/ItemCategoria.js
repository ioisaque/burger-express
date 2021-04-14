import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import commonStyles from '~/assets/styles/commonStyles';

export default props => {
  return (
    <TouchableOpacity style={styles.categoryBox} onPress={props.onPress}>
      <Icon
        size={55}
        name={props.icon}
        color={props.color ? props.color : commonStyles.colors.neutral}
      />
      <Text style={styles.categoryTitle}>{props.nome}</Text>
      <Text style={styles.categorySubTitle}>{props.icon}</Text>
    </TouchableOpacity>
  );
};
