import React, {useEffect, useState} from 'react';
import {useAuth} from '~/contexts/auth';
import api from '~/services/api';

import ItemList from '~/components/ItemList';
import ItemFila from './components/ItemFila';
import {AppContainer, ImageBgWrap} from '~/components/styledComponents';

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
    <AppContainer>
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
    </AppContainer>
  );
}

export default Fila;
