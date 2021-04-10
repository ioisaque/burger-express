import React, {useEffect, useState} from 'react';
import {useAuth} from '~/contexts/auth';
import api from '~/services/api';

import {AppWrap, ImageBgWrap} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';
import ItemList from '~/components/ItemList';
import CartButton from '~/components/CartButton';

import ItemFila from './components/ItemFila';

function Fila({route, navigation}) {
  const {usuario} = useAuth();
  const [carrinho, setCarrinho] = useState([]);

  const [pedidos, setPedidos] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading && loadItems();
  }, [loading]);

  async function loadItems() {
    try {
      const {data} = await api.get(`/pedidos/?id_cliente=${usuario.id}`);

      setPedidos(data.data);
    } catch (error) {
      console.log('Error on Fila/index.js ==> ', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppWrap>
      {carrinho.length ? (
        <AppHeader
          loading={loading && true}
          component={
            <CartButton
              count={carrinho.items.length}
              onPress={() => {
                navigation.navigate('Carrinho', {pedido: carrinho});
              }}
            />
          }
          title="Pedidos na fila"
        />
      ) : (
        <AppHeader loading={loading && true} title="Pedidos na fila" />
      )}
      <ImageBgWrap>
        <ItemList
          data={pedidos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemFila
              onPress={() => {
                navigation.navigate('DetalhesPedido', {pedido: item});
              }}
              {...item}
            />
          )}
          onRefresh={loadItems}
          refreshing={loading}
          emptyMessage="none"
        />
      </ImageBgWrap>
    </AppWrap>
  );
}

Fila.navigationOptions = ({route, navigation}) => ({
  title: 'Pedidos na Fila',
  headerShown: false,
});

export default Fila;
