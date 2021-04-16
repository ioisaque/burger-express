import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import CONFIG from '~/config/dashboard';
import commonStyles from '~/assets/styles/commonStyles';

export default function ItemBanner({showPhoto, ...props}) {
  return showPhoto ? (
    <TouchableOpacity style={styles.categoryBox} onPress={props.onPress}>
      <Image
        resizeMode="cover"
        style={styles.categoryPhoto}
        source={{uri: CONFIG.PATHS.IMG + props.foto}}
      />
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryTitle}>{props.nome}</Text>
        {/* <Text style={styles.categorySubTitle}>{props.icon}</Text> */}
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.categoryBox} onPress={props.onPress}>
      <Icon
        size={55}
        name={props.icon}
        style={styles.categoryIcon}
        color={props.color ? props.color : commonStyles.colors.neutral}
      />
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryTitle}>{props.nome}</Text>
        {/* <Text style={styles.categorySubTitle}>{props.icon}</Text> */}
      </View>
    </TouchableOpacity>
  );
}
