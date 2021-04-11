import React from 'react';
import {Keyboard} from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import commonStyles from '~/assets/styles/commonStyles';
import {InputContainer, InputText} from './styledComponents';

function Input({style, icon, iconSize, iconColor, ...rest}) {
  return (
    <InputContainer style={style}>
      {icon && (
        <Icon
          name={icon}
          style={{marginRight: 10}}
          size={iconSize ? iconSize : 20}
          color={iconColor ? iconColor : commonStyles.colors.black}
        />
      )}
      <InputText
        keyboardAppearance="light"
        onPressOut={Keyboard.dismiss}
        {...rest}
      />
    </InputContainer>
  );
}

Input.propTypes = {
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconSize: PropTypes.number,
};

Input.defaultProps = {
  styte: {},
  iconSize: 23,
};

export default Input;
