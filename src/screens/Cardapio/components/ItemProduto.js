import React from 'react';
import {useCardapio} from '~/contexts/cardapio';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import styles from '../styles';
import CONFIG from '~/config/dashboard';

export default props => {
  const {cardapio} = useCardapio();

  return props.listing ? (
    <TouchableOpacity onPress={props.onPress} style={styles.listItemWrapper}>
      <Image
        resizeMode="cover"
        style={styles.listItemPhoto}
        source={{
          uri:
            CONFIG.PATHS.IMG +
            (props.foto ? props.foto : cardapio.categoria.foto),
        }}
      />
      <View style={styles.listItemContent}>
        <Text style={styles.listItemTitle}>{props.descricao}</Text>
        <Text style={styles.listItemDescrip}>
          {props.observacoes && capOnlyFirstLetter(props.observacoes)}
        </Text>
        <Text style={styles.listItemPrice}>
          {floatToReais(props.valor_venda)}
        </Text>
      </View>
    </TouchableOpacity>
  ) : (
    <View style={styles.singleItemWrapper}>
      <Text style={styles.singleItemPrice}>
        {floatToReais(props.valor_venda)}
      </Text>

      {props.observacoes && (
        <Text style={styles.singleItemDescrip}>
          {capOnlyFirstLetter(props.observacoes)}
        </Text>
      )}
    </View>
  );
};

function capOnlyFirstLetter(string) {
  let newString = string.toLowerCase();
  newString = newString.charAt(0).toUpperCase() + newString.slice(1);

  return newString;
}
function capEveryFirstLetter(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}
function floatToReais(numero) {
  var numero = parseFloat(numero)
    .toFixed(2)
    .split('.');
  numero[0] = 'R$ ' + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}
