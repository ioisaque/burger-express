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
        `/getProdutosByCategoria.php?id=${navigation.state.params.categoria.id}`,
      );
      const {lista} = response.data;
      console.log('getProdutosByCategoria ==> ', response.data);

      setProdutos(lista);
    } catch (error) {
      console.log('Error on Cardapio/Produtos.js ==> ', error);
      console.log(
        'URL Request ==> ',
        `${api.defaults.baseURL}/getProdutosByCategoria.php?id=${navigation.state.params.categoria.id}`,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppWrap>
      <AppHeader
        loading={loading && true}
        banner={navigation.state.params.categoria.foto}
      />
      <AppBody>
        <ItemList
          data={produtos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemProduto
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
