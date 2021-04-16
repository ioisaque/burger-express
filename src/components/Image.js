import React from 'react';
import {ActivityIndicator} from 'react-native';
import Image from 'react-native-image-progress';
import commonStyles from '~/assets/styles/commonStyles';

export default function NiceImage({...props}) {
  return (
    <Image
      {...props}
      imageStyle={props.style}
      indicator={<ActivityIndicator />}
      indicatorProps={{size: 'small', color: commonStyles.colors.neutral}}
    />
  );
}
