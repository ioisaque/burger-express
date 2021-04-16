import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styledComponents';
import commonStyles from '~/assets/styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.linkItemWrapper}>
        <Icon
          size={30}
          name={props.icon}
          style={styles.linkItemIcon}
          color={
            props.iconColor ? props.iconColor : commonStyles.colors.neutral
          }
        />
        <Text style={styles.linkItemTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
