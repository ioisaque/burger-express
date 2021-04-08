import React, {useEffect, useState} from 'react';

import api from '~/services/api';

import {AppWrap, AppBody} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';
import ItemList from '~/components/ItemList';

import ItemProduto from './components/ItemProduto';

function Produtos({navigation}) {
  const [produtos, setProdutos] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    setLoading(true);

    try {
      const response = await api.get(
        `/produtos/?id_categoria=${navigation.state.params.categoria.id}`,
      );
      const {data} = response.data;
      console.debug('produtos ==> ', data);
      console.debug('categoria ==> ', navigation.state.params.categoria);

      setProdutos(data);
    } catch (error) {
      console.debug('Error on Cardapio/Produtos.js ==> ', error);
      console.debug(
        'URL Request ==> ',
        `${api.defaults.baseURL}/produtos/?id_categoria=${
          navigation.state.params.categoria.id
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
        banner={navigation.state.params.categoria.banner}
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
                  categoria: navigation.state.params.categoria,
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

Produtos.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.categoria.nome,
  headerShown: false,
});

export default Produtos;
