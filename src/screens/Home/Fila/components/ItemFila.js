import React, {useMemo} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import commonStyles from '~/assets/styles/commonStyles';

export default props => {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(props.data_hora), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [props.data_hora]);

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.FilaWrapper}>
      <View style={styles.FilaContent}>
        <View style={styles.FilaHeader}>
          <Icon
            size={30}
            color={commonStyles.colors[props.status.color]}
            name={props.status.icon.replace('mdi-', '')}
          />
          <Text style={styles.FilaTitle}>Pedido Nº {leftPad(props.id, 5)}</Text>
        </View>
        <Text style={styles.FilaData}>{dateParsed}</Text>
      </View>
    </TouchableOpacity>
  );
};

function leftPad(value, totalWidth, paddingChar) {
  var length = totalWidth - value.toString().length + 1;
  return Array(length).join(paddingChar || '0') + value;
}
