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

import TotalItem from './components/TotalItem';
import ItemAdicional from './components/ItemAdicional';
import ItemProduto from '~/screens/Cardapio/components/ItemProduto';

export default function EditarProduto({ navigation }) {

    const [produto, setProduto] = useState(navigation.state.params.produto)
    const [adicionais, setAdicionais] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        api.get(`/getAdicionaisByCategoria.php?id=${navigation.state.params.categoria.id}`)
            .then(({ data }) => {

                const { lista } = data;

                const adicionais = lista.map(item => {
                    item.qtd = 0;

                    return item;
                })

                setAdicionais(adicionais);
            });
    }, []);

    function updateItemQtd(item, value) {
        let items = adicionais;
        let index = items.indexOf(item);

        items[index].qtd = value >= 0 ? value : 0;

        setAdicionais(items);
        setRefresh(!refresh);
    }

    return (
        <AppWrap>
            <AppHeader banner={
                navigation.state.params.produto.foto
                    ? navigation.state.params.produto.foto
                    : navigation.state.params.categoria.foto}
            />
            <AppBody>
                <ItemProduto {...navigation.state.params.produto} />

                <FlatList
                    style={{ marginTop: 25 }}
                    data={adicionais}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <ItemAdicional
                            {...item}
                            plus={() => updateItemQtd(item, item.qtd + 1)}
                            minus={() => updateItemQtd(item, item.qtd - 1)} />}
                    extraData={refresh}
                />

                <Input
                    icon="chat-alert"
                    style={{ marginTop: 10 }}
                    placeholder="Ex: Tirar salada, maionese a parte, etc." />

                <TotalItem produto={produto} adicionais={adicionais}/>

                <Button
                    onSubmitEditing={() => handleCart}
                    backgroundColor={commonStyles.colors.success}>ADICIONAR AO CARRINHO</Button>

            </AppBody>
        </AppWrap>
    );
}

EditarProduto.navigationOptions = {
    title: 'Editar Produto',
    headerShown: false
}