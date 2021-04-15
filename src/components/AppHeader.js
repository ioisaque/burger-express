import React, {useState} from 'react';
import {useAuth} from '~/contexts/auth';
import {useCardapio} from '~/contexts/cardapio';
import {View, Image, TouchableOpacity, Text} from 'react-native';

import {styles} from './styledComponents';
import {awesomeAlertStyles} from '~/assets/styles/layoutStyles';
import commonStyles from '~/assets/styles/commonStyles';
import AwesomeAlert from 'react-native-awesome-alerts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({route, initialRoute, navigation}) => {
  const {cardapio} = useCardapio();
  const {usuario, signOut} = useAuth();
  const [alert, showAlert] = useState();

  if (route.name === 'Perfil') {
    return (
      <>
        <View style={styles.straightHeader}>
          <View style={styles.inlineItems}>
            <View style={styles.profileInfoWrap}>
              <Image
                resizeMode="cover"
                style={styles.profilePhoto}
                source={commonStyles.imgs.isaac}
              />
              <Text style={styles.profileName}>{usuario.nome}</Text>
            </View>
            <Icon
              size={25}
              name="logout"
              onPress={() => showAlert(true)}
              style={{padding: 10}}
              color={commonStyles.colors.breadcrumb}
            />
          </View>
        </View>
        <AwesomeAlert
          show={alert}
          title="Sair do App"
          message="Tem certeza que deseja sair?"
          cancelText="Não"
          confirmText="Sim"
          showProgress={false}
          showCancelButton={true}
          showConfirmButton={true}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          onConfirmPressed={signOut}
          onDismiss={() => showAlert(false)}
          onCancelPressed={() => showAlert(false)}
          confirmButtonColor={commonStyles.colors.red}
          {...awesomeAlertStyles}
        />
      </>
    );
  } else if (route.name === 'Produtos') {
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
          {cardapio.categoria?.icon ? (
            <Icon
              size={30}
              name={cardapio.categoria.icon}
              color={commonStyles.colors.black}
            />
          ) : (
            <Image
              resizeMode="cover"
              style={styles.headerLOGO}
              source={commonStyles.imgs.adaptiveIcon}
            />
          )}
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
            source={commonStyles.imgs.adaptiveIcon}
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
            source={commonStyles.imgs.adaptiveIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
};
