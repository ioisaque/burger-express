import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import commonStyles from '~/assets/styles/commonStyles';

export default props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.categoryWrapper}>
      <View style={styles.categoryInlineItems}>
        <Text style={styles.categoryTitle}>{props.nome}</Text>
        <Icon
          size={30}
          color={props.color ? props.color : commonStyles.colors.black}
          name={props.icon}
        />
      </View>
    </TouchableOpacity>
  );
};
