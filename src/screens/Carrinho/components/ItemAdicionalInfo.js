import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles';
import { LineSeparator } from '~/components/styledComponents'

export default props => {
    return (
        <View style={styles.infoWrapper}>
            <View style={styles.infoContent}>
                <View style={styles.infoHeader}>
                    <Text style={styles.itemName}>{(parseInt(props.qtd) || 0) + 'x ' + props.nome.substr(0, 15)}</Text>
                    <Text style={styles.itemPrice}>{floatToReais(props.valor_venda)}</Text>
                </View>
                {props.descricao ? <Text style={styles.itemFooter}>{capOnlyFirstLetter(props.descricao)}</Text> : null}
            </View>
            <LineSeparator/>
        </View>
    )
}

function capOnlyFirstLetter(string) {
    let newString = string.toLowerCase();
    newString = newString.charAt(0).toUpperCase() + newString.slice(1)

    return newString;
}
function floatToReais(numero) {
    var numero = parseFloat(numero).toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}