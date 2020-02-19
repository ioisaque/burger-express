import React from 'react';
import {View, ActivityIndicator, Image, Text} from 'react-native';

import {styles} from './styledComponents';
import commonStyles from '~/assets/styles/commonStyles';

export default props => {
  if (props.loading) {
    return (
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerLOGO}
          source={commonStyles.imgs.x}
          resizeMode="contain"
        />
        <ActivityIndicator
          style={styles.headerTitle}
          size="small"
          color={commonStyles.colors.black}
        />
      </View>
    );
  } else if (props.foto) {
    return (
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerFOTO}
          source={props.foto}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>{props.nome}</Text>
      </View>
    );
  } else if (props.banner) {
    return (
      <View style={styles.headerContainerStraight}>
        <Image
          style={styles.headerLOGO}
          source={commonStyles.imgs.x}
          resizeMode="contain"
        />

        <Image
          style={styles.headerBanner}
          source={{uri: commonStyles.baseDIR + props.banner}}
          resizeMode="cover"
        />
      </View>
    );
  } else {
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
  }
};
