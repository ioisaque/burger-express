import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import commonStyles from '../assets/styles/commonStyles';

export default props => {
  return (
    <Icon
      size={30}
      name={props.focused ? props.iconOn : props.iconOff}
      color={
        props.focused
          ? props.colorOn
            ? props.colorOn
            : commonStyles.colors.red
          : props.colorOff
          ? props.colorOff
          : commonStyles.colors.neutral
      }
    />
  );
};
