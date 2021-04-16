import React, {useEffect} from 'react';
import {useCliente} from '~/contexts/cliente';

import ItemList from '~/components/ItemList';
import ItemFila from './components/ItemFila';
import LoadingView from '~/components/LoadingView';
import {AppContainer, ImageBgWrap} from '~/components/styledComponents';

export default function Fila({route, navigation}) {
  const {loading, historico, getHistorico} = useCliente();

  useEffect(() => {
    getHistorico();
  }, []);

  return loading ? (
    <LoadingView />
  ) : (
    <AppContainer>
      <ImageBgWrap>
        <ItemList
          data={historico.filter(item => {
            const status = parseInt(item.status.id, 10);
            return status > 0 && status < 5;
          })}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemFila
              {...item}
              onPress={() => {
                navigation.navigate('Detalhes do Pedido', {pedido: item});
              }}
            />
          )}
          emptyIcon={false}
          emptyMessage={false}
          refreshing={loading}
          onRefresh={getHistorico}
        />
      </ImageBgWrap>
    </AppContainer>
  );
}
