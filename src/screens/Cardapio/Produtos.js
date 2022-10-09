import React, {useEffect} from 'react';
import ItemList from '~/components/ItemList';
import LoadingView from '~/components/LoadingView';
import ItemBanner from './components/ItemBanner';
import ItemProduto from './components/ItemProduto';
import {useCardapio} from '~/contexts/cardapio';
import AppHeader from '~/components/AppHeader';
import {AppContainer, AppBody} from '~/components/styledComponents';

export default function Produtos({route, navigation}) {
  const {loading, cardapio, getProdutos} = useCardapio();

  console.log(`${cardapio.categoria.nome} => `, cardapio.categoria.id);

  useEffect(() => {
    cardapio.categoria?.banner &&
      navigation.setOptions({
        header: () => (
          <AppHeader
            route={route}
            initialRoute="Cardápio"
            navigation={navigation}
            extraComponent={<ItemBanner item={cardapio.categoria} />}
          />
        ),
      });
  }, [route, navigation, cardapio]);

  return loading ? (
    <LoadingView />
  ) : (
    <AppContainer>
      <AppBody hasGayHeader={cardapio.categoria?.banner}>
        <ItemList
          data={cardapio.data.find(
            i => i.id == cardapio.categoria.id,
          ).produtos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemProduto
              listing
              {...item}
              onPress={() => {
                setCardapio({
                  ...cardapio,
                  produto: item,
                  categoria: cardapio.categoria,
                });
                navigation.navigate('Carrinho', {screen: 'Editar Item'});
              }}
            />
          )}
          refreshing={loading}
          onRefresh={getProdutos}
          emptyIcon="food"
          emptyMessage="Nenhum produto nesta categoria ainda. :("
        />
      </AppBody>
    </AppContainer>
  );
}
