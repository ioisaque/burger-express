import React from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import commonStyles from '~/assets/styles/commonStyles';
import { LineSeparator } from '~/components/styledComponents'

import ItemAdicional from '../components/ItemAdicional'

export default props => {
    return (
        <View style={{ marginBottom: 15 }}>
            <View style={styles.itemWrapper}>
                <TouchableOpacity onPress={props.minus}>
                    <Icon
                        name={'minus-circle-outline'}
                        size={30}
                        color={commonStyles.colors.danger}
                    />
                </TouchableOpacity>

                <View style={styles.itemContent}>
                    <View style={styles.itemHeader}>
                        <Text style={styles.itemName}>{(parseInt(props.qtd) || 0) + 'x ' + props.nome}</Text>
                        <Text style={styles.itemPrice}>{floatToReais(props.valor_venda)}</Text>
                    </View>
                    {props.descricao ? <Text style={styles.itemFooter}>{capOnlyFirstLetter(props.descricao)}</Text> : null}
                </View>

                <TouchableOpacity onPress={props.plus}>
                    <Icon
                        name={'plus-circle-outline'}
                        size={30}
                        color={commonStyles.colors.success}
                    />
                </TouchableOpacity>
            </View>

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
