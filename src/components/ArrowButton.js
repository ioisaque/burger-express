import React from 'react';
import {Image} from 'react-native';

import PropTypes from 'prop-types';

import commonStyles from '~/assets/styles/commonStyles';
import {
  ArrowButtonContainer,
  ArrowButtonText,
  styles,
} from './styledComponents';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ArrowButton({
  children,
  icon,
  iconColor,
  enabled,
  ...rest
}) {
  if (icon == 'logoX') {
    return (
      <ArrowButtonContainer {...rest}>
        <Image
          style={styles.xIcon}
          source={commonStyles.imgs.adaptiveIcon}
          resizeMode="contain"
        />
        <ArrowButtonText>{children}</ArrowButtonText>
        {enabled && (
          <Icon
            name={'arrow-right-drop-circle-outline'}
            size={28}
            color={commonStyles.colors.black}
          />
        )}
      </ArrowButtonContainer>
    );
  } else {
    return (
      <ArrowButtonContainer {...rest}>
        {icon != '' && <Icon name={icon} size={33} color={iconColor} />}
        <ArrowButtonText>{children}</ArrowButtonText>
        {enabled && (
          <Icon
            name={'arrow-right-drop-circle-outline'}
            size={28}
            color={commonStyles.colors.black}
          />
        )}
      </ArrowButtonContainer>
    );
  }
}

ArrowButton.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  enabled: PropTypes.bool,
};

ArrowButton.defaultProps = {
  icon: '',
  iconColor: '',
  enabled: false,
};
