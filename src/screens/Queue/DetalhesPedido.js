import React, { Component } from 'react';
import { FlatList } from 'react-native';

import api from '~/services/api';
import AppWrap from '~/components/AppWrap';
import AppHeader from '~/components/AppHeader';
import AppBody from '~/components/AppBody';

import Input from '~/components/Input';
import Button from '~/components/Button';

import ItemPedido from './components/ItemPedido';
import TotalPedido from './components/TotalPedido';

import commonStyles from '~/assets/styles/commonStyles';

export default class DetalhesPedido extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Pedido Nº ' + navigation.state.params.pedido.id,
        headerShown: false
    });

    state = {
        pedido: this.props.navigation.state.params.pedido,
    };

    render() {
        return (
            <AppWrap>
                <AppHeader title={'Pedido Nº ' + this.state.pedido.id} />
                <AppBody>
                    <FlatList
                        data={this.state.pedido.items}
                        keyExtractor={item => item.id_item}
                        renderItem={({ item }) => <ItemPedido {...item} />}
                    />

                    <Input
                        icon="chat-alert"
                        style={{marginVertical: 10}}
                        placeholder="Ex: Tirar salada, maionese a parte, etc." />

                    <TotalPedido {...this.state.pedido} />

                    {this.state.pedido.status == 2 && <Button
                        style={{ marginTop: 30 }}
                        onSubmitEditing={() => handleRemove}
                        backgroundColor={commonStyles.colors.red}>CANCELAR PEDIDO</Button>}
                </AppBody>
            </AppWrap>
        );
    }
}