import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'
import { TotalOverLine } from '~/components/styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import commonStyles from '~/assets/styles/commonStyles'

export default props => {
    return (
        <View style={styles.totalWrapper}>
            <TotalOverLine />

            <View style={styles.totalHeader}>
                <View style={styles.totalHeader}>
                    <Text style={styles.totalTitle}>Total do Pedido</Text>
                    <Icon name="arrow-right-bold" size={20} color={commonStyles.colors.black} />
                </View>
                <Text style={styles.totalPrice}>{floatToReais(props.valor_pago)}</Text>
            </View>
        </View>
    )
}

function floatToReais(numero) {
    var numero = parseFloat(numero).toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}