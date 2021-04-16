import React, {useState} from 'react';
import {View} from 'react-native';
import api from '~/services/api';

import commonStyles from '~/assets/styles/commonStyles';
import AppHeader from '~/components/AppHeader';
import {AppContainer, AppBody, LineSeparator} from '~/components/styledComponents';

import Input from '~/components/Input';
import Button from '~/components/Button';
import ArrowButton from '~/components/ArrowButton';

import ItemList from '~/components/ItemList';
import ItemPedido from '../components/ItemPedido';
import TotalPedido from '../components/TotalPedido';

export default function Carrinho({route, navigation}) {
  const [refresh, setRefresh] = useState(false);
  const [pedido, setPedido] = useState(route.params.pedido);
  // const [endereco, setEndereco] = useState(route.params.cliente.enderecos)
  const [method, setMethod] = useState(0);

  function updateItemQtd(item, value) {
    let nPedido = pedido;
    let index = nPedido.items.indexOf(item);

    if (value >= 1) nPedido.items[index].qtd = value;
    else nPedido.items.splice(index, 1);

    setPedido(nPedido);
    setRefresh(!refresh);

    if (pedido.items.length == 0) navigation.navigate('Fila');
  }

  return (
    <AppContainer>
      <AppHeader title={'Carrinho'} />
      <AppBody>
        <ItemList
          data={pedido.items}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemPedido
              {...item}
              plus={() => updateItemQtd(item, item.qtd + 1)}
              minus={() => updateItemQtd(item, item.qtd - 1)}
            />
          )}
          Footer={
            <View>
              <Input
                icon="chat-alert"
                style={{marginTop: 10}}
                placeholder="Ex: Ligar ao chegar, entregar para, etc."
              />

              {/* <TotalItem
                produto={route.params.produto}
                adicionais={adicionais}
              /> */}
              <TotalPedido pedido={pedido} />

              <ArrowButton
                style={{marginTop: 5}}
                icon="cash"
                iconColor={commonStyles.colors.success}
                enabled={true}
                onPress={() => navigation.navigate('SelecionarPagamento')}>
                Pagar em Dinheiro
              </ArrowButton>

              {!method && <LineSeparator />}
              {!method && (
                <Input
                  icon="cash-refund"
                  iconSize={30}
                  iconColor={commonStyles.colors.success}
                  value={pedido.troco}
                  style={{marginVertical: 10}}
                  placeholder="Precisará de troco?"
                />
              )}
              <ArrowButton
                style={{marginBottom: 5}}
                icon="logoX"
                enabled={true}
                onPress={() => navigation.navigate('EditarEndereco')}>
                Entrega em Palmeiras, 39
              </ArrowButton>

              <Button onSubmitEditing={null} color={commonStyles.colors.red}>
                FINALIZAR PEDIDO
              </Button>
            </View>
          }
        />
      </AppBody>
    </AppContainer>
  );
}

Carrinho.navigationOptions = ({route, navigation}) => ({
  title: 'Carrinho',
  headerShown: false,
});
