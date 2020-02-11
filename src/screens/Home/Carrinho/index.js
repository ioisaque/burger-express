import React, { useState } from 'react';
import { FlatList } from 'react-native';

import api from '~/services/api';

import commonStyles from '~/assets/styles/commonStyles';
import AppHeader from '~/components/AppHeader';
import {
    AppWrap,
    AppBody,
    LineSeparator,
} from '~/components/styledComponents';

import Input from '~/components/Input';
import Button from '~/components/Button';
import ArrowButton from '~/components/ArrowButton';

import ItemPedido from './components/ItemPedido';
import TotalPedido from './components/TotalPedido';

export default function Carrinho({ navigation }) {

    const [refresh, setRefresh] = useState(false)
    const [pedido, setPedido] = useState(navigation.state.params.pedido)
    // const [endereco, setEndereco] = useState(navigation.state.params.cliente.enderecos)
    const [pagamento, setPagamento] = useState('dinheiro')

    function updateItemQtd(item, value) {
        let nPedido = pedido;
        let index = nPedido.items.indexOf(item);

        if (value >= 1)
            nPedido.items[index].qtd = value;
        else
            nPedido.items.splice( index, 1 );

        setPedido(nPedido);
        setRefresh(!refresh);

        if (pedido.items.length == 0)
            navigation.navigate('Fila');
    }

    return (
        <AppWrap>
            <AppHeader title={'Carrinho'} />
            <AppBody>
                <FlatList
                    data={pedido.items}
                    keyExtractor={item => item.id_item}
                    renderItem={({ item }) =>
                        <ItemPedido
                            {...item}
                            plus={() => updateItemQtd(item, parseInt(item.qtd) + 1)}
                            minus={() => updateItemQtd(item, parseInt(item.qtd) - 1)} />}
                    extraData={refresh}
                />

                <Input
                    icon="chat-alert"
                    value={pedido.observacoes}
                    editable={false}
                    style={{ marginVertical: 10 }}
                    placeholder="Ex: Tirar salada, maionese a parte, etc." />

                <TotalPedido pedido={pedido} />

                <LineSeparator />

                <ArrowButton
                    style={{ marginTop: 5 }}
                    icon='cash'
                    iconColor={commonStyles.colors.success}
                    enabled={true}
                    onPress={() => navigation.navigate('SelecionarPagamento')}>Pagar em Dinheiro</ArrowButton>

                {pagamento == 'dinheiro' && <LineSeparator />}
                {pagamento == 'dinheiro' && <Input
                    icon="cash-refund"
                    iconSize={30}
                    iconColor={commonStyles.colors.success}
                    value={pedido.troco}
                    style={{ marginVertical: 10 }}
                    placeholder="Precisará de troco?" />}

                <LineSeparator />

                <ArrowButton
                    style={{ marginTop: 5 }}
                    icon='logoX'
                    enabled={true}
                    onPress={() => navigation.navigate('SelecionarEndereco')}>Entrega em Palmeiras, 39</ArrowButton>

                <Button
                    style={{ marginTop: 10 }}
                    onSubmitEditing={() => handleRemove}
                    backgroundColor={commonStyles.colors.success}>FINALIZAR PEDIDO</Button>
            </AppBody>
        </AppWrap>
    );
}

Carrinho.navigationOptions = ({ navigation }) => ({
    title: 'Carrinho',
    headerShown: false
});