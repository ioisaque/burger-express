import React from 'react';
import { FlatList } from 'react-native';

import api from '~/services/api';
import AppWrap from '~/components/AppWrap';
import AppHeader from '~/components/AppHeader';
import AppBody from '~/components/AppBody';

import Input from '~/components/Input'
import Button from '~/components/Button'

import ItemProduto from '~/screens/Cardapio/components/ItemProduto';
import ItemAdicional from './components/ItemAdicional';

import TotalItem from './components/TotalItem';

import commonStyles from '~/assets/styles/commonStyles';

export default class EditarProduto extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.produto.nome,
        headerShown: false
    });

    state = {
        refresh: false,
        categoria: null,
        produto: null,
        adicionais: [],
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = async () => {
        const response = await api.get(`/getAdicionaisByCategoria.php?id=${this.props.navigation.state.params.categoria.id}`)
        const { lista } = response.data;

        const adicionais = lista.map(item => {
            item.qtd = 0;

            return item;
        })

        this.setState({
            categoria: this.props.navigation.state.params.categoria,
            produto: this.props.navigation.state.params.produto,
            adicionais: adicionais
        })
    }

    updateItemQtd = (item, value) => {
        let items = this.state.adicionais;
        let index = items.indexOf(item);

        items[index].qtd = value >= 0 ? value : 0;

        this.setState({ refresh: !this.state.refresh });
        this.setState({ adicionais: items });
        this.setState({ refresh: !this.state.refresh });
    }

    render() {
        return (
            <AppWrap>
                <AppHeader banner={
                    this.props.navigation.state.params.produto.foto
                        ? this.props.navigation.state.params.produto.foto
                        : this.props.navigation.state.params.categoria.foto}
                />
                <AppBody>
                    <ItemProduto {...this.props.navigation.state.params.produto} />

                    <FlatList
                        style={{ marginTop: 25 }}
                        data={this.state.adicionais}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <ItemAdicional
                                {...item}
                                plus={() => this.updateItemQtd(item, item.qtd + 1)}
                                minus={() => this.updateItemQtd(item, item.qtd - 1)} />}
                        extraData={this.state}
                    />

                    <Input
                        icon="chat-alert"
                        style={{ marginTop: 10 }}
                        placeholder="Ex: Tirar salada, maionese a parte, etc." />

                    <TotalItem {...this.state.produto} />

                    <Button
                        onSubmitEditing={() => handleCart}
                        backgroundColor={commonStyles.colors.success}>ADICIONAR AO CARRINHO</Button>

                </AppBody>
            </AppWrap>
        );
    }
}