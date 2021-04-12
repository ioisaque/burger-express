import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import api from '~/services/api';

import AppHeader from '~/components/AppHeader';
import commonStyles from '~/assets/styles/commonStyles';
import {AppContainer, AppBody, LineSeparator} from '~/components/styledComponents';

import Button from '~/components/Button';
import ItemList from '~/components/ItemList';
import ArrowButton from '~/components/ArrowButton';

import ItemPedido from '../components/ItemPedido';
import TotalPedido from '../components/TotalPedido';

export default function DetalhesPedido({route, navigation}) {
  const [pedido, setPedido] = useState(route.params.pedido);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading && loadItems();
  }, [loading]);

  async function loadItems() {
    try {
      const {data} = await api.get(`/pedidos/?id=${route.params.pedido.id}`);

      setPedido(data.data);
    } catch (error) {
      console.log('Error on Fila/index.js ==> ', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppContainer>
      <AppHeader title={'Pedido Nº ' + pedido.id} />
      <AppBody>
        <ItemList
          data={pedido.items}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ItemPedido {...item} />}
          onRefresh={loadItems}
          refreshing={loading}
          emptyMessage="none"
        />

        <Text style={{marginVertical: 10}}>{pedido.observacoes}</Text>

        <LineSeparator style={{marginTop: 30}} />

        <ArrowButton icon={pedido.metodo.icon} iconColor={pedido.metodo.color}>
          {pedido.metodo.nome}
        </ArrowButton>

        <LineSeparator />

        <ArrowButton style={commonStyles.text} icon="logoX">
          Entrega em Palmeiras, 39
        </ArrowButton>

        <TotalPedido pedido={pedido} />

        {pedido.status === 1 && (
          <Button
            onSubmitEditing={() => console.log('Attemp to cancel order...')}
            backgroundColor={commonStyles.colors.red}>
            CANCELAR PEDIDO
          </Button>
        )}
      </AppBody>
    </AppContainer>
  );
}

DetalhesPedido.navigationOptions = ({route, navigation}) => ({
  title: 'Pedido Nº ' + route.params.pedido.id,
  headerShown: false,
});
