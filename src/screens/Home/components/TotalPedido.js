import React from 'react';
import {View, Text} from 'react-native';
import Image from '~/components/Image';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import commonStyles from '~/assets/styles/commonStyles';

import {TotalOverLine} from '~/components/styledComponents';

export default function TotalPedido({pedido}) {
  return (
    <View style={styles.totalWrapper}>
      <TotalOverLine />

      <View style={styles.totalHeader}>
        <View style={styles.totalHeader}>
          {pedido.valor_troco ? (
            <Image
              style={styles.payStamp}
              source={commonStyles.imgs.changeStamp}
              resizeMode="contain"
            />
          ) : !pedido.valor_a_pagar ? (
            <Image
              style={styles.payStamp}
              source={commonStyles.imgs.paidStamp}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.totalTitle}>Total do Pedido</Text>
          )}

          <Icon
            name="arrow-right-bold"
            size={20}
            color={commonStyles.colors.black}
          />
        </View>
        <Text style={styles.totalPrice}>
          {floatToReais(pedido.valor_total)}
        </Text>
      </View>
    </View>
  );
}

function floatToReais(numero) {
  var numero = parseFloat(numero)
    .toFixed(2)
    .split('.');
  numero[0] = 'R$ ' + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}
