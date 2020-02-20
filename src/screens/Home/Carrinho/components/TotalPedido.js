import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import commonStyles from '~/assets/styles/commonStyles';

import {TotalOverLine} from '~/components/styledComponents';

export default function TotalPedido({pedido}) {
  let valor_total = 0;

  pedido.items.map(item => {
    valor_total += parseFloat(item.qtd * item.valor_venda);

    if (item.adicionais.length > 0) {
      item.adicionais.map(item => {
        valor_total += parseFloat(item.qtd * item.valor_venda);
      });
    }
  });

  return (
    <View style={styles.totalWrapper}>
      <TotalOverLine />

      <View style={styles.totalHeader}>
        <View style={styles.totalHeader}>
          <Text style={styles.totalTitle}>Total do Pedido</Text>
          <Icon
            name="arrow-right-bold"
            size={20}
            color={commonStyles.colors.black}
          />
        </View>
        <Text style={styles.totalPrice}>{floatToReais(valor_total)}</Text>
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
