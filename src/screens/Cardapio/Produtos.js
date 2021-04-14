import React, {useEffect} from 'react';
import ItemList from '~/components/ItemList';
import AppHeader from '~/components/AppHeader';
import {useCardapio} from '~/contexts/cardapio';
import ItemProduto from './components/ItemProduto';
import {AppContainer, AppBody} from '~/components/styledComponents';

export default function Produtos({route, navigation}) {
  const {loading, cardapio, setCardapio, produtos, getProdutos} = useCardapio();

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <AppHeader
          type="banner"
          route={route}
          initialRoute="Cardápio"
          navigation={navigation}
        />
      ),
    });
  }, [route, navigation]);

  return (
    <AppContainer>
      <AppBody hasGayHeader={cardapio.categoria?.banner}>
        <ItemList
          data={produtos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemProduto
              listing
              onPress={() => {
                setCardapio({
                  categoria: cardapio.categoria,
                  produto: item,
                  adicionais: false,
                });
                navigation.navigate('Carrinho', {screen: 'Editar Item'});
              }}
              {...item}
            />
          )}
          refreshing={loading}
          onRefresh={getProdutos}
        />
      </AppBody>
    </AppContainer>
  );
}
