import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import commonStyles from '~/assets/styles/commonStyles';
import {
    AppWrap,
    AppBody,
} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';
import AppLoding from '~/components/AppLoding';
import EmptyList from '~/components/EmptyList';
import CartButton from '~/components/CartButton';

import ItemFila from './components/ItemFila';

function Fila({ navigation, isFocused }) {

    const [pedidos, setPedidos] = useState()

    useEffect(() => {
        async function loadPedidos() {
            const response = await api.get(`/getPedidosQueueByCliente.php?id_cliente=${1}&id_loja=${1}`)
            const { lista } = response.data;

            setPedidos(lista);
        }

        if (isFocused)
            loadPedidos();
    }, [isFocused])

    return pedidos ? (
        <AppWrap>
            <AppHeader
                component={
                    <CartButton
                        count={pedidos.length}
                        onPress={() => {
                            navigation.navigate('Carrinho', { pedido: pedidos[0] })
                        }}
                    />
                } />
            <AppBody>
                <FlatList
                    data={pedidos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ItemFila onPress={() => {
                        navigation.navigate('DetalhesPedido', { pedido: item })
                    }} {...item} />}
                    ListEmptyComponent={<EmptyList />}
                />
            </AppBody>
        </AppWrap>
    ) : (
            <AppLoding color={commonStyles.colors.black} />
        );
}

Fila.navigationOptions = ({ navigation }) => ({
    title: 'Pedidos na Fila',
    headerShown: false
});

export default withNavigationFocus(Fila)