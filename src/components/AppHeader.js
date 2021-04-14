import React from 'react';
import {useAuth} from '~/contexts/auth';
import {useCardapio} from '~/contexts/cardapio';
import {View, Image, TouchableOpacity, Text} from 'react-native';

import CONFIG from '~/config/dashboard';
import {styles} from './styledComponents';
import commonStyles from '~/assets/styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({type = false, route, initialRoute, navigation}) => {
  const {signOut} = useAuth();
  const {cardapio} = useCardapio();

  if (type === 'banner' && cardapio.categoria?.banner) {
    return (
      <View style={styles.gayHeader}>
        <TouchableOpacity
          style={styles.inlineItems}
          onPress={navigation.goBack}>
          <Icon
            size={30}
            name="arrow-left-bold-circle-outline"
            color={commonStyles.colors.black}
          />
          <Text style={styles.headerTitle}>{cardapio.categoria.nome}</Text>
          <Image
            resizeMode="cover"
            style={styles.headerLOGO}
            source={commonStyles.imgs.x}
          />
        </TouchableOpacity>
        <Image
          resizeMode="cover"
          style={styles.headerBanner}
          source={{uri: CONFIG.PATHS.IMG + cardapio.categoria.banner}}
        />
      </View>
    );
  } else if (type === 'banner' && cardapio.categoria?.icon) {
    return (
      <View style={styles.straightHeader}>
        <TouchableOpacity
          style={styles.inlineItems}
          onPress={navigation.goBack}>
          <Icon
            size={30}
            name="arrow-left-bold-circle-outline"
            color={commonStyles.colors.black}
          />
          <Text style={styles.headerTitle}>{cardapio.categoria.nome}</Text>
          <Icon
            size={30}
            name={cardapio.categoria.icon}
            color={commonStyles.colors.black}
          />
        </TouchableOpacity>
      </View>
    );
  } else if (route.name === initialRoute) {
    return (
      <View style={styles.straightHeader}>
        <View style={styles.inlineItems}>
          <Text style={styles.headerTitle}>{route.name}</Text>
          <Image
            resizeMode="cover"
            style={styles.headerLOGO}
            source={commonStyles.imgs.x}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.straightHeader}>
        <TouchableOpacity
          style={styles.inlineItems}
          onPress={navigation.goBack}>
          <Icon
            size={30}
            name="arrow-down-drop-circle-outline"
            color={commonStyles.colors.black}
          />
          <Text style={styles.headerTitle}>{route.name}</Text>
          <Image
            resizeMode="cover"
            style={styles.headerLOGO}
            source={commonStyles.imgs.x}
          />
        </TouchableOpacity>
      </View>
    );
  }
};
