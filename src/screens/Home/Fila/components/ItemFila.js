import React, {useMemo} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import {leftPad} from '~/services/auxf';
import commonStyles from '~/assets/styles/commonStyles';

export default props => {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(props.data_hora), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [props.data_hora]);

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.itemFilaWrapper}>
      <Icon
        size={30}
        style={styles.itemFilaIcon}
        name={props.status.icon.replace('mdi-', '')}
        color={commonStyles.colors[props.status.color]}
      />
      <View style={styles.itemFilaContent}>
        <Text style={styles.itemFilaTitle}>
          Pedido Nº {leftPad(props.id, 5)}
        </Text>
        <Text style={styles.itemFilaSubTitle}>{dateParsed}</Text>
      </View>
    </TouchableOpacity>
  );
};
