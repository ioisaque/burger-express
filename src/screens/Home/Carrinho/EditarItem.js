import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React, {useState} from 'react';
import {Image} from 'react-native';

import styles from './styles';
import CONFIG from '~/config/dashboard';
import {useCardapio} from '~/contexts/cardapio';
import commonStyles from '~/assets/styles/commonStyles';

import {AppContainer, styles as styled} from '~/components/styledComponents';
import Input from '~/components/Input';
import Button from '~/components/Button';
import ItemList from '~/components/ItemList';
import TotalItem from './components/TotalItem';
import ItemPedido from '../components/ItemPedido';
import ItemProduto from '~/screens/Cardapio/components/ItemProduto';

export default function EditarProduto({route, navigation}) {
  const {loading, cardapio, getProdutos} = useCardapio();
  const [adicionais, setAdicionais] = useState(cardapio.adicionais);

  function updateItemQtd(item, value) {
    let items = adicionais;
    let index = items.indexOf(item);

    items[index].qtd = value >= 0 ? value : 0;

    setAdicionais(adicionais);
  }

  return (
    <AppContainer>
      <Image
        resizeMode="cover"
        style={styles.itemFoto}
        source={{
          uri:
            CONFIG.PATHS.IMG +
            (cardapio.produto.foto
              ? cardapio.produto.foto
              : cardapio.categoria.foto),
        }}
      />
      <ItemList
        ListHeaderComponent={
          <ItemProduto {...cardapio.produto} categoria={cardapio.categoria} />
        }
        data={adicionais}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          item.qtd = item.qtd ? item.qtd : 0;
          return (
            <ItemPedido
              {...item}
              categoria={cardapio.categoria}
              plus={() => updateItemQtd(item, item.qtd + 1)}
              minus={() => updateItemQtd(item, item.qtd - 1)}
            />
          );
        }}
        refreshing={loading}
        onRefresh={getProdutos}
        style={{
          ...styled.overlapingView,
          backgroundColor: commonStyles.colors.white,
        }}
        emptyIcon="database-settings"
        emptyMessage="Nenhum adicional para este produto. :("
        ListFooterComponent={
          <KeyboardAwareScrollView
            enableOnAndroid
            enableAutomaticScroll
            showsVerticalScrollIndicator={false}>
            <Input
              icon="chat-alert"
              style={{marginTop: 10}}
              placeholder="Ex: Tirar salada, maionese a parte, etc."
            />

            <TotalItem produto={cardapio.produto} adicionais={adicionais} />

            <Button
              onPress={() =>
                navigation.navigate('Carrinho', {screen: 'Carrinho'})
              }
              color={commonStyles.colors.red}>
              ADICIONAR AO CARRINHO
            </Button>
          </KeyboardAwareScrollView>
        }
      />
    </AppContainer>
  );
}
