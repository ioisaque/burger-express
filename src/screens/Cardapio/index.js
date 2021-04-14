import React, {useEffect} from 'react';
import ItemList from '~/components/ItemList';
import AppHeader from '~/components/AppHeader';
import {useCardapio} from '~/contexts/cardapio';
import ItemCategoria from './components/ItemCategoria';
import {AppContainer, AppBody} from '~/components/styledComponents';

export default function Cardapio({route, navigation}) {
  const {
    loading,
    setCardapio,
    getProdutos,
    categorias,
    getCategorias,
  } = useCardapio();

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <AppHeader
          route={route}
          initialRoute="Cardápio"
          navigation={navigation}
        />
      ),
    });
  }, [route, navigation]);

  return (
    <AppContainer>
      <AppBody>
        <ItemList
          data={categorias}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemCategoria
              onPress={() => {
                getProdutos(item);
                navigation.navigate('Produtos');
              }}
              {...item}
            />
          )}
          numColumns={2}
          refresh={loading}
          onRefresh={getCategorias}
          ItemSeparatorComponent={null}
        />
      </AppBody>
    </AppContainer>
  );
}
