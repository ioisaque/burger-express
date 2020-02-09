import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import styles from '../styles';
import { LineSeparator } from '~/components/styledComponents'

export default props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.itemWrapper}>
            <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{props.nome}</Text>
                <Text style={styles.itemPrice}>{floatToReais(props.valor_venda)}</Text>
            </View>
            {props.descricao ? <Text style={styles.itemDescrip}>{capOnlyFirstLetter(props.descricao)}</Text> : null}

            <LineSeparator />
        </TouchableOpacity>
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