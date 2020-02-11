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

export default function DetalhesPedido({ navigation }) {

    const [pedido, setPedido] = useState(navigation.state.params.pedido)

    return (
        <AppWrap>
            <AppHeader title={'Pedido Nº ' + pedido.id} />
            <AppBody>
                <FlatList
                    data={pedido.items}
                    keyExtractor={item => item.id_item}
                    renderItem={({ item }) => <ItemPedido {...item} />}
                />

                <Input
                    icon="chat-alert"
                    value={pedido.observacoes}
                    editable={false}
                    style={{ marginVertical: 10 }}
                    placeholder="Ex: Tirar salada, maionese a parte, etc." />

                <LineSeparator style={{ marginTop: 30 }} />

                <ArrowButton
                    icon='cash'
                    iconColor={commonStyles.colors.success}>Pagar em Dinheiro</ArrowButton>

                <LineSeparator />

                <ArrowButton
                    style={{ marginTop: 5 }}
                    icon='logoX'>Entrega em Palmeiras, 39</ArrowButton>

                <TotalPedido pedido={pedido} />

                {pedido.status == 2 && <Button
                    onSubmitEditing={() => handleRemove}
                    backgroundColor={commonStyles.colors.red}>CANCELAR PEDIDO</Button>}
            </AppBody>
        </AppWrap>
    );
}

DetalhesPedido.navigationOptions = ({ navigation }) => ({
    title: 'Pedido Nº ' + navigation.state.params.pedido.id,
    headerShown: false
});