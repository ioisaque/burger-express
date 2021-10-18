import React from 'react';
import Image from 'react-native-image-progress';
import commonStyles from '~/assets/styles/commonStyles';

export default function NiceImage({...props}) {
  return (
    <Image
      {...props}
      imageStyle={props.style}
      indicatorProps={{size: 'small', color: commonStyles.colors.neutral}}
    />
  );
}
