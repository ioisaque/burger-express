import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import commonStyles from '~/assets/styles/commonStyles';
import {TotalOverLine} from '~/components/styledComponents';

export default function TotalItem({produto, adicionais}) {
  let valor_total = parseFloat(produto.valor_venda);

  if (adicionais?.length > 0) {
    adicionais.map(item => {
      valor_total += parseFloat(item.qtd * item.valor_venda);
    });
  }

  return (
    <View style={styles.totalWrapper}>
      <TotalOverLine />

      <View style={styles.totalHeader}>
        <View style={styles.totalHeader}>
          <Text style={styles.totalTitle}>Total do Item</Text>
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

TotalItem.propTypes = {
  data: PropTypes.object,
};

function floatToReais(numero) {
  var numero = parseFloat(numero)
    .toFixed(2)
    .split('.');
  numero[0] = 'R$ ' + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}
