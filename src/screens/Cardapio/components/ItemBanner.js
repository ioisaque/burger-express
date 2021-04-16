import React from 'react';
import {View, Image} from 'react-native';
import CONFIG from '~/config/dashboard';
import {styles} from '~/components/styledComponents';

export default function ItemBanner({item}) {
  return (
    <View style={styles.gayHeader}>
      <Image
        resizeMode="cover"
        style={styles.headerBanner}
        source={{uri: CONFIG.PATHS.IMG + item.banner}}
      />
    </View>
  );
}
