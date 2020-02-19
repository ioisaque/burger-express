import React, {useEffect, useState} from 'react';

import api from '~/services/api';

import commonStyles from '~/assets/styles/commonStyles';
import {AppWrap, AppBody} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';
import ItemList from '~/components/ItemList';

import Input from '~/components/Input';
import Button from '~/components/Button';

import TotalItem from './components/TotalItem';
import ItemAdicional from './components/ItemAdicional';
import ItemProduto from '~/screens/Cardapio/components/ItemProduto';
import {View} from 'react-native';

export default function EditarProduto({navigation}) {
  const [adicionais, setAdicionais] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    setLoading(true);

    try {
      const response = await api.get(
        `/getAdicionaisByCategoria.php?id_categoria=${navigation.state.params.categoria.id}`,
      );
      const {lista} = response.data;
      console.log('getAdicionaisByCategoria ==> ', lista);

      const adicionais = lista.map(item => {
        item.qtd = 0;

        return item;
      });

      setAdicionais(adicionais);
    } catch (error) {
      console.log('Error on Home/Carrinho/EditarItem.js ==> ', error);
      console.log(
        'URL Request ==> ',
        `${api.defaults.baseURL}/getAdicionaisByCategoria.php?id_categoria=${navigation.state.params.categoria.id}`,
      );
    } finally {
      setLoading(false);
    }
  }

  function updateItemQtd(item, value) {
    setLoading(!loading);
    let items = adicionais;
    let index = items.indexOf(item);

    items[index].qtd = value >= 0 ? value : 0;

    setAdicionais(items);
    setLoading(!loading);
  }

  return (
    <AppWrap>
      <AppHeader
        banner={
          navigation.state.params.produto.foto
            ? navigation.state.params.produto.foto
            : navigation.state.params.categoria.foto
        }
      />
      <AppBody>
        <ItemList
          ListHeaderComponent={
            <ItemProduto {...navigation.state.params.produto} />
          }
          data={adicionais}
          extraData={loading}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemAdicional
              {...item}
              plus={() => updateItemQtd(item, item.qtd + 1)}
              minus={() => updateItemQtd(item, item.qtd - 1)}
            />
          )}
          onRefresh={loadItems}
          refreshing={loading}
          emptyIcon={!loading && navigation.state.params.categoria.icon}
          emptyMessage={!loading && 'Nenhum adicional disponível...'}
          ListFooterComponent={
            <View>
              <Input
                icon="chat-alert"
                style={{marginTop: 10}}
                placeholder="Ex: Tirar salada, maionese a parte, etc."
              />

              <TotalItem
                produto={navigation.state.params.produto}
                adicionais={adicionais}
              />

              <Button
                onSubmitEditing={() => handleCart}
                backgroundColor={commonStyles.colors.success}>
                ADICIONAR AO CARRINHO
              </Button>
            </View>
          }
        />
      </AppBody>
    </AppWrap>
  );
}

EditarProduto.navigationOptions = {
  title: 'Editar Produto',
  headerShown: false,
};
