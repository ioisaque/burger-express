import React from 'react';
import {View} from 'react-native';
import Image from '~/components/Image';
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
