import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import api from '~/services/api';

import commonStyles from '~/assets/styles/commonStyles';
import {
    AppWrap,
    AppBody,
} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';

import Input from '~/components/Input'
import Button from '~/components/Button'

import ItemProduto from '~/screens/Cardapio/components/ItemProduto';

export default function SelecionarPagamento({ navigation }) {

    const [metodos, setMetodos] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        api.get(`/getAdicionaisByCategoria.php?id=1`)
            .then(({ data }) => {

                const { lista } = data;

                const adicionais = lista.map(item => {
                    item.qtd = 0;

                    return item;
                })

                setMetodos(adicionais);
            });
    }, []);

    return (
        <AppWrap>
            <AppHeader title={'Métodos de Pagamento'}
            />
            <AppBody>
                <FlatList
                    style={{ marginTop: 25 }}
                    data={metodos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <ItemProduto {...item} />}
                    extraData={refresh}
                />

                <Button
                    onSubmitEditing={() => handleCart}
                    backgroundColor={commonStyles.colors.success}>ADICIONAR CARTÃO</Button>

            </AppBody>
        </AppWrap>
    );
}

SelecionarPagamento.navigationOptions = {
    title: 'Selecionar Pagamento',
    headerShown: false
}