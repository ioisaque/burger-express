import React, {useEffect, useState} from 'react';
import api from '~/services/api';

import {AppWrap, AppBody} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';
import ItemList from '~/components/ItemList';

import ItemCategoria from './components/ItemCategoria';

function Categorias({route, navigation}) {
  const [categorias, setCategorias] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    try {
      const response = await api.get('/produtos/?categorias=1');
      const {data} = response.data;

      setCategorias(data);
    } catch (error) {
      console.log('Error on Cardapio/Categorias.js ==> ', error);
      console.log('URL Request ==> ', `${api.defaults.baseURL}/categorias`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppWrap>
      <AppHeader loading={loading && true} title={'Cardápio'} />
      <AppBody>
        <ItemList
          data={categorias}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemCategoria
              onPress={() => {
                navigation.navigate('Produtos', {categoria: item});
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

Categorias.navigationOptions = ({route, navigation}) => ({
  title: 'Cardápio',
  headerShown: false,
});

export default Categorias;
