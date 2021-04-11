import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import styles from '../styles';
import commonStyles from '~/assets/styles/commonStyles';
import {LineSeparator} from '~/components/styledComponents';

export default props => {
  return props.listing ? (
    <TouchableOpacity onPress={props.onPress} style={styles.itemWrapper}>
      <Image
        resizeMode="cover"
        style={styles.itemSideFoto}
        source={{
          uri:
            commonStyles.baseDIR +
            (props.foto ? props.foto : props.categoria.foto),
        }}
      />
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{props.descricao}</Text>
        <Text style={styles.itemDescrip}>
          {props.observacoes && capOnlyFirstLetter(props.observacoes)}
        </Text>
        <Text style={styles.itemPrice}>{floatToReais(props.valor_venda)}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <>
      <Image
        resizeMode="cover"
        style={styles.itemFoto}
        source={{
          uri:
            commonStyles.baseDIR +
            (props.foto ? props.foto : props.categoria.foto),
        }}
      />
      <View style={styles.itemWrapper}>
        <Text style={styles.itemTitle}>{props.descricao.substring(0, 27)}</Text>
        <Text style={styles.itemPrice}>{floatToReais(props.valor_venda)}</Text>
      </View>
      {props.observacoes && (
        <Text style={styles.itemDescrip}>
          {capOnlyFirstLetter(props.observacoes)}
        </Text>
      )}
      <LineSeparator />
    </>
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
