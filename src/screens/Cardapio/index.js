import React, {useEffect} from 'react';
import ItemList from '~/components/ItemList';
import AppHeader from '~/components/AppHeader';
import {useCardapio} from '~/contexts/cardapio';
import LoadingView from '~/components/LoadingView';
import ItemCategoria from './components/ItemCategoria';
import {AppContainer, AppBody} from '~/components/styledComponents';

export default function Cardapio({route, navigation}) {
  const {loading, cardapio, getCardapio, setCardapio} = useCardapio();

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
          data={cardapio.data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemCategoria
              // showPhoto
              {...item}
              onPress={() => {
                setCardapio({...cardapio, categoria: item});
                navigation.navigate('Produtos');
              }}
            />
          )}
          numColumns={2}
          Separator={() => null}
          refresh={loading}
          onRefresh={getCardapio}
        />
      </AppBody>
    </AppContainer>
  );
}
