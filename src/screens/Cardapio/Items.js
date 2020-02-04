import React, { Component } from 'react';
import { FlatList } from 'react-native';

import api from '~/services/api';
import AppWrap from '~/components/AppWrap';
import AppHeader from '~/components/AppHeader';
import AppBody from '~/components/AppBody';

import ItemProduto from './components/ItemProduto';

export default class Items extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.categoria.nome,
        headerShown: false
    });

    state = {
        categoria: null,
        produtos: [],
    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = async () => {
        const response = await api.get(`/getProdutosByCategoria.php?id=${this.props.navigation.state.params.categoria.id}`)
        const { lista } = response.data;

        this.setState({
            categoria: this.props.navigation.state.params.categoria,
            produtos: lista
        })
    }

    render() {
        return (
            <AppWrap>
                <AppHeader banner={this.props.navigation.state.params.categoria.foto} />
                <AppBody>
                    <FlatList
                        data={this.state.produtos}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <ItemProduto onPress={() => {
                            this.props.navigation.navigate('Adicionais', { categoria: this.state.categoria, produto: item })
                        }} {...item} />}
                    />
                </AppBody>
            </AppWrap>
        );
    }
}