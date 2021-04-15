import React from 'react';
import ItemList from '~/components/ItemList';
import LoadingView from '~/components/LoadingView';
import ItemBanner from './components/ItemBanner';
import ItemProduto from './components/ItemProduto';
import {useCardapio} from '~/contexts/cardapio';
import {AppContainer, AppBody} from '~/components/styledComponents';

export default function Produtos({navigation}) {
  const {loading, cardapio, setCardapio, produtos, getProdutos} = useCardapio();
  return loading ? (
    <LoadingView />
  ) : (
    <AppContainer>
      <ItemBanner item={cardapio.categoria} />
      <AppBody hasGayHeader={cardapio.categoria?.banner}>
        <ItemList
          data={produtos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemProduto
              listing
              {...item}
              onPress={() => {
                setCardapio({
                  categoria: cardapio.categoria,
                  produto: item,
                  adicionais: false,
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
