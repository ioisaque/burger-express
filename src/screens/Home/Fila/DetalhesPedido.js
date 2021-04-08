import React from 'react';
import {FlatList, Text} from 'react-native';

import api from '~/services/api';

import commonStyles from '~/assets/styles/commonStyles';
import AppHeader from '~/components/AppHeader';
import {AppWrap, AppBody, LineSeparator} from '~/components/styledComponents';

import Input from '~/components/Input';
import Button from '~/components/Button';
import ArrowButton from '~/components/ArrowButton';

import ItemPedido from './components/ItemPedido';
import TotalPedido from './components/TotalPedido';

export default function DetalhesPedido({navigation}) {
  return (
    <AppWrap>
      <AppHeader title={'Pedido Nº ' + navigation.state.params.pedido.id} />
      <AppBody>
        <FlatList
          data={navigation.state.params.pedido.items}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ItemPedido {...item} />}
        />

        <Text style={{marginVertical: 10}}>
          {navigation.state.params.pedido.observacoes}
        </Text>

        <LineSeparator style={{marginTop: 30}} />

        <ArrowButton
          icon={navigation.state.params.pedido.metodo.icon}
          iconColor={navigation.state.params.pedido.metodo.color}>
          {navigation.state.params.pedido.metodo.nome}
        </ArrowButton>

        <LineSeparator />

        <ArrowButton style={commonStyles.text} icon="logoX">
          Entrega em Palmeiras, 39
        </ArrowButton>

        <TotalPedido pedido={navigation.state.params.pedido} />

        {navigation.state.params.pedido.status === 1 && (
          <Button
            onSubmitEditing={() => console.debug('Attemp to cancel order...')}
            backgroundColor={commonStyles.colors.red}>
            CANCELAR PEDIDO
          </Button>
        )}
      </AppBody>
    </AppWrap>
  );
}

DetalhesPedido.navigationOptions = ({navigation}) => ({
  title: 'Pedido Nº ' + navigation.state.params.pedido.id,
  headerShown: false,
});
