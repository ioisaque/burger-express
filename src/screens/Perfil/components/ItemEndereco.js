import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import commonStyles from '~/assets/styles/commonStyles';
import {LineSeparator} from '~/components/styledComponents';

export default props => {
  if (props.isDefault)
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemTitle}>{`${props.logradouro.substr(0, 20)}, ${
            props.numero
          }`}</Text>

          <Image source={commonStyles.imgs.adaptiveIcon} style={styles.xIcon} />
        </View>
        <LineSeparator />
      </TouchableOpacity>
    );
  else
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemTitle}>{`${props.logradouro.substr(0, 20)}, ${
            props.numero
          }`}</Text>

          <Icon name="map-marker" size={28} color={commonStyles.colors.black} />
        </View>
        <LineSeparator />
      </TouchableOpacity>
    );
};
