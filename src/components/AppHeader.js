import React from 'react';
import {View, Image, Text} from 'react-native';

import {styles} from './styledComponents';
import commonStyles from '~/assets/styles/commonStyles';

export default props => {
  if (props.title) {
    return (
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerLOGO}
          source={commonStyles.imgs.x}
          resizeMode="contain"
        />
        {props.component}
        {props.title && <Text style={styles.headerTitle}>{props.title}</Text>}
      </View>
    );
  } else if (props.banner) {
    return (
      <View style={styles.headerContainerStraight}>
        <Image
          style={styles.headerBanner}
          source={{uri: commonStyles.baseDIR + props.banner}}
          resizeMode="cover"
        />
      </View>
    );
  } else {
    return <></>;
  }
};
