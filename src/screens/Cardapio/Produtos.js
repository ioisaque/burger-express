import React, {useEffect, useState} from 'react';

import api from '~/services/api';

import {AppWrap, AppBody} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';
import ItemList from '~/components/ItemList';

import ItemProduto from './components/ItemProduto';

function Produtos({route, navigation}) {
  const [produtos, setProdutos] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadItems();
    console.log('ROUTE => ', route);
  }, []);

  async function loadItems() {
    setLoading(true);

    try {
      const {data} = await api.get(
        `/produtos/?id_categoria=${route.params.categoria.id}`,
      );

      setProdutos(data.data);
    } catch (error) {
      console.log('Error on Cardapio/Produtos.js ==> ', error);
      console.log(
        'URL Request ==> ',
        `${api.defaults.baseURL}/produtos/?id_categoria=${
          route.params.categoria.id
        }`,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppWrap>
      <AppHeader
        loading={loading && true}
        banner={route.params.categoria.banner}
      />
      <AppBody>
        <ItemList
          data={produtos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemProduto
              listing
              onPress={() => {
                navigation.navigate('Adicionais', {
                  categoria: route.params.categoria,
                  produto: item,
                });
              }}
              {...item}
            />
          )}
          onRefresh={loadItems}
          refreshing={loading}
        />
      </AppBody>
    </AppWrap>
  );
}

Produtos.navigationOptions = ({route}) => ({
  title: route.params.categoria.nome,
  headerShown: false,
});

export default Produtos;
