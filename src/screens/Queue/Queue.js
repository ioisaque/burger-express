import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native';

import api from '~/services/api';
import AppWrap from '~/components/AppWrap';
import AppHeader from '~/components/AppHeader';
import AppBody from '~/components/AppBody';
import AppLoding from '~/components/AppLoding';

import ItemQueue from './components/ItemQueue';
import commonStyles from '~/assets/styles/commonStyles';

export default function Queue({navigation}) {

    const [pedidos, setPedidos] = useState()

    useEffect(() => {
        async function loadPedidos() {
            const response = await api.get(`/getPedidosQueueByCliente.php?id_cliente=${1}&id_loja=${1}`)
            const { lista } = response.data;

            setPedidos(lista);
        }

        loadPedidos();
    }, [])

    return pedidos ? (
        <AppWrap>
            <AppHeader title={'Pedidos na Fila'} />
            <AppBody>
                <FlatList
                    data={pedidos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ItemQueue onPress={() => {
                        navigation.navigate('DetalhesPedido', { pedido: item })
                    }} {...item} />}
                />
            </AppBody>
        </AppWrap>
    ) : (
        <AppLoding color={commonStyles.colors.black}/>
    );
}

Queue.navigationOptions = ({ navigation }) => ({
    title: 'Pedidos na Fila',
    headerShown: false
});