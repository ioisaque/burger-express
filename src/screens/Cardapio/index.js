import React, {useEffect} from 'react';
import ItemList from '~/components/ItemList';
import AppHeader from '~/components/AppHeader';
import {useCardapio} from '~/contexts/cardapio';
import LoadingView from '~/components/LoadingView';
import ItemCategoria from './components/ItemCategoria';
import {AppContainer, AppBody} from '~/components/styledComponents';

export default function Cardapio({route, navigation}) {
  const {loading, getProdutos, categorias, getCategorias} = useCardapio();

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

  return loading ? (
    <LoadingView />
  ) : (
    <AppContainer>
      <AppBody>
        <ItemList
          data={categorias}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemCategoria
              // showPhoto
              onPress={() => {
                getProdutos(item);
                navigation.navigate('Produtos');
              }}
              {...item}
            />
          )}
          numColumns={2}
          Separator={() => null}
          refresh={loading}
          onRefresh={getCategorias}
        />
      </AppBody>
    </AppContainer>
  );
}
