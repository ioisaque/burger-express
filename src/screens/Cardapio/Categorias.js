import React, {useEffect, useState} from 'react';

import api from '~/services/api';

import {AppWrap, AppBody} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';
import ItemList from '~/components/ItemList';

import ItemCategoria from './components/ItemCategoria';

function Categorias({navigation}) {
  const [categorias, setCategorias] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    setLoading(true);

    try {
      const response = await api.get('/getMenuCategories.php');
      const {lista} = response.data;
      console.log('getMenuCategories ==> ', response.data);

      setCategorias(lista);
    } catch (error) {
      console.log('Error on Cardapio/Categorias.js ==> ', error);
      console.log(
        'URL Request ==> ',
        `${api.defaults.baseURL}/getMenuCategories.php`,
      );
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

Categorias.navigationOptions = ({navigation}) => ({
  title: 'Cardápio',
  headerShown: false,
});

export default Categorias;
