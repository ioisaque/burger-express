import React from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from '../styles'
import { LineSeparator } from '~/components/styledComponents'

import ItemAdicional from '~/screens/Carrinho/components/ItemAdicionalInfo'

export default props => {
    return (
        <View style={styles.itemWrapper}>
            <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{props.nome}</Text>
                <Text style={styles.itemPrice}>{floatToReais(props.valor_venda)}</Text>
            </View>
            {props.descricao ? <Text style={styles.itemDescrip}>{capOnlyFirstLetter(props.descricao)}</Text> : null}

            <LineSeparator />

            {props.adicionais &&
                <FlatList
                    data={props.adicionais}
                    keyExtractor={item => item.id_adc}
                    renderItem={({ item }) => <ItemAdicional {...item} />}
                />
            }
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