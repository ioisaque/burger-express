import React, {useEffect, useState} from 'react';

import api from '~/services/api';

import {AppWrap, ImageBgWrap} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';
import ItemList from '~/components/ItemList';
import CartButton from '~/components/CartButton';

import ItemFila from './components/ItemFila';

function Fila({navigation}) {
  const [carrinho, setCarrinho] = useState([]);

  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading && loadItems();
  }, [loading]);

  async function loadItems() {
    setLoading(true);

    try {
      const response = await api.get(
        `/getPedidosQueueByCliente.php?id_cliente=${1}&id_loja=${1}`,
      );
      const {lista, count} = response.data;

      // Calculando valor total de todos os pedidos
      if (count) {
        lista.map(pedido => {
          let valor_total = 0;

          pedido.items.map(item => {
            valor_total += parseFloat(item.qtd * item.valor_venda);

            if (item.adicionais.length > 0) {
              item.adicionais.map(item => {
                valor_total += parseFloat(item.qtd * item.valor_venda);
              });
            }
          });

          pedido.valor_total = valor_total;
        });
      }

      setPedidos(lista);
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

Fila.navigationOptions = ({navigation}) => ({
  title: 'Pedidos na Fila',
  headerShown: false,
});

export default Fila;
