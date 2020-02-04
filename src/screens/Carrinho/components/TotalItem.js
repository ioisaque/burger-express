import React from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { TotalOverLine } from '~/components/styles'

import styles from '../styles'
import commonStyles from '~/assets/styles/commonStyles'

export default function TotalItem(produto) {

    async function getTotal() {
        const p = await produto;

        return parseInt(p.valor_venda)
    }

    const valor_total = getTotal()

    // var valor_total = props.produto.valor_venda;

    // props.produto.adicionais.map(item => {
    //     valor_total += item.qtd * item.valor_venda
    // })

    return (
        <View style={styles.totalWrapper}>
            <TotalOverLine />

            <View style={styles.totalHeader}>
                <View style={styles.totalHeader}>
                    <Text style={styles.totalTitle}>Total do Item</Text>
                    <Icon name="arrow-right-bold" size={20} color={commonStyles.colors.black} />
                </View>
                <Text style={styles.totalPrice}>{
                    floatToReais(valor_total)
                    }</Text>
            </View>
        </View>
    )
}

TotalItem.propTypes = {
    produto: PropTypes.object,
}

function floatToReais(numero) {
    var numero = parseFloat(numero).toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}