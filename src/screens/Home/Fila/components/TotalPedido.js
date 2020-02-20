import React from 'react';
import {View, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import commonStyles from '~/assets/styles/commonStyles';

import {TotalOverLine} from '~/components/styledComponents';

export default function TotalPedido({pedido}) {
  const valor_pago = parseFloat(pedido.valor_pago);
  const valor_total = parseFloat(pedido.valor_total);

  let pago = 0;
  let displayValor = valor_total;

  if (valor_pago === valor_total) {
    pago = 1;
    displayValor = valor_pago;
  } else if (valor_pago > valor_total) {
    pago = 2;
    displayValor = valor_pago - valor_total;
  }

  return (
    <View style={styles.totalWrapper}>
      <TotalOverLine />

      <View style={styles.totalHeader}>
        <View style={styles.totalHeader}>
          {pago == 2 ? (
            <Image
              style={styles.payStamp}
              source={commonStyles.imgs.changeStamp}
              resizeMode="contain"
            />
          ) : pago == 1 ? (
            <Image
              style={styles.payStamp}
              source={commonStyles.imgs.paidStamp}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.totalTitle}>Total a pagar</Text>
          )}

          <Icon
            name="arrow-right-bold"
            size={20}
            color={commonStyles.colors.black}
          />
        </View>
        <Text style={styles.totalPrice}>{floatToReais(displayValor)}</Text>
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
