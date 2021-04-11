import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import commonStyles from '~/assets/styles/commonStyles';

export default props => {
  return (
    <View style={styles.itemWrapper}>
      <TouchableOpacity onPress={props.minus}>
        <Icon
          name={'minus-circle-outline'}
          size={25}
          color={commonStyles.colors.danger}
        />
      </TouchableOpacity>

      <View style={styles.itemContent}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemName}>
            {(parseInt(props.qtd) || 0) +
              'x ' +
              props.descricao.substring(0, 25)}
          </Text>
          <Text style={styles.itemPrice}>
            {floatToReais(props.qtd*props.valor_venda)}
          </Text>
        </View>
        {props.observacoes ? (
          <Text style={styles.itemFooter}>
            {capOnlyFirstLetter(props.observacoes)}
          </Text>
        ) : null}
      </View>

      <TouchableOpacity onPress={props.plus}>
        <Icon
          name={'plus-circle-outline'}
          size={25}
          color={commonStyles.colors.success}
        />
      </TouchableOpacity>
    </View>
  );
};

function capOnlyFirstLetter(string) {
  let newString = string.toLowerCase();
  newString = newString.charAt(0).toUpperCase() + newString.slice(1);

  return newString;
}
function floatToReais(numero) {
  var numero = parseFloat(numero)
    .toFixed(2)
    .split('.');
  numero[0] = 'R$ ' + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}
