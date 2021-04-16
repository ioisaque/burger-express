import React, {useState} from 'react';
import {useAuth} from '~/contexts/auth';
import {useCliente} from '~/contexts/cliente';
import {useCardapio} from '~/contexts/cardapio';
import {View, TouchableOpacity, Text} from 'react-native';

import Image from '~/components/Image';
import {styles} from './styledComponents';
import {capEveryFirstLetter} from '~/services/auxf';
import AwesomeAlert from 'react-native-awesome-alerts';
import commonStyles from '~/assets/styles/commonStyles';
import {awesomeAlertStyles} from '~/assets/styles/layoutStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({route, initialRoute, navigation, extraComponent}) => {
  const {signOut} = useAuth();
  const {cliente} = useCliente();
  const {cardapio} = useCardapio();
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
                source={
                  cliente.foto ? {uri: cliente.foto} : commonStyles.imgs.isaac
                }
              />
              <Text style={styles.profileName}>
                {capEveryFirstLetter(cliente.nome)}
              </Text>
            </View>
            <Icon
              size={25}
              name="logout"
              onPress={() => showAlert(true)}
              style={{padding: 10}}
              color={commonStyles.colors.black}
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
      <>
        <View style={styles.straightHeader}>
          <TouchableOpacity
            style={styles.inlineItems}
            onPress={navigation.goBack}>
            <Icon
              size={30}
              name="arrow-left-drop-circle-outline"
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
        {extraComponent}
      </>
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
            name="arrow-left-drop-circle-outline"
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
