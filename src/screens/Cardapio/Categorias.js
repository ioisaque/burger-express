import React, { Component } from 'react';
import { FlatList } from 'react-native';

import api from '~/services/api';

import {
    AppWrap,
    AppBody,
} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';

import ItemCategoria from './components/ItemCategoria';

export default class Categorias extends Component {
    static navigationOptions = {
        headerShown: false,
        title: 'Cardápio'
    }

    state = {
        categorias: [],
    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = async () => {
        const response = await api.get('/getMenuCategories.php')
        const { lista } = response.data;

        this.setState({ categorias: lista })
    }

    render() {
        return (
            <AppWrap>
                <AppHeader title={'Cardápio'} />
                <AppBody>
                    <FlatList
                        data={this.state.categorias}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <ItemCategoria onPress={() => {
                            this.props.navigation.navigate('Items', { categoria: item })
                        }} {...item} />}
                    />
                </AppBody>
            </AppWrap>
        );
    }
}