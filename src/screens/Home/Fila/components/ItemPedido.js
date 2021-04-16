import React from 'react';
import {useCardapio} from '~/contexts/cardapio';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import styles from '../styles';
import CONFIG from '~/config/dashboard';
import {floatToReais, capOnlyFirstLetter} from '~/services/auxf';

export default props => {
  const {categorias} = useCardapio();

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.orderItemWrapper}>
      <Image
        resizeMode="cover"
        style={styles.orderItemPhoto}
        source={{
          uri:
            CONFIG.PATHS.IMG +
            (props.foto
              ? props.foto
              : categorias.find(item => item.id === props.id_categoria).foto),
        }}
      />
      <View style={styles.orderItemContent}>
        <Text style={styles.orderItemTitle}>{props.descricao}</Text>
        <Text style={styles.orderItemDescrip}>
          {props.observacoes && capOnlyFirstLetter(props.observacoes)}
        </Text>
        <Text style={styles.orderItemPrice}>
          {floatToReais(props.valor_venda)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
