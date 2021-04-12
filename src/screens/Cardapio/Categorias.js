import React, {useEffect, useState} from 'react';
import {useAuth} from '~/contexts/auth';
import api from '~/services/api';

import {AppContainer, AppBody} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';
import ItemList from '~/components/ItemList';

import ItemCategoria from './components/ItemCategoria';

function Categorias({route, navigation}) {
  const [categorias, setCategorias] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading && loadItems();
  }, [loading]);

  async function loadItems() {
    try {
      const {data} = await api.get('/produtos/?categorias=1');

      setCategorias(data.data);
    } catch (error) {
      console.log('Error on Cardapio/Categorias.js ==> ', error);
      console.log('URL Request ==> ', `${api.defaults.baseURL}/categorias`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppContainer>
      <AppHeader title={'Cardápio'} />
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
        />
      </AppBody>
    </AppContainer>
  );
}

Categorias.navigationOptions = ({route, navigation}) => ({
  title: 'Cardápio',
  headerShown: false,
});

export default Categorias;
