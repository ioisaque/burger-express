import React from 'react';
import {View, Image, Text} from 'react-native';

import {styles} from './styledComponents';
import commonStyles from '~/assets/styles/commonStyles';

export default props => {
  if (props.title) {
    return (
      <View style={styles.headerContainer}>
        <Image
          resizeMode="cover"
          style={props.foto ? styles.headerFOTO : styles.headerLOGO}
          source={props.foto ? props.foto : commonStyles.imgs.x}
        />
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    );
  } else if (props.banner) {
    return (
      <View style={styles.headerContainerStraight}>
        <Image
          resizeMode="cover"
          style={styles.headerBanner}
          source={{uri: commonStyles.baseDIR + props.banner}}
        />
      </View>
    );
  } else {
    return <></>;
  }
};
