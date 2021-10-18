import React, {useState, useMemo} from 'react';
import {View, Text} from 'react-native';
import Image from '~/components/Image';
import api from '~/services/api';

import {
  AppContainer,
  LineSeparator,
  styles as styled,
} from '~/components/styledComponents';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';

import styles from './styles';
import Button from '~/components/Button';
import ItemList from '~/components/ItemList';
import ItemPedido from './components/ItemPedido';
import TotalPedido from '../components/TotalPedido';
import LoadingView from '~/components/LoadingView';
import ItemLink from '~/components/ItemLink';
import commonStyles from '~/assets/styles/commonStyles';

export default function DetalhesPedido({route, navigation}) {
  const [loading, setLoading] = useState(false);
  const [pedido, setPedido] = useState(route.params.pedido);

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(pedido.data_hora), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [pedido.data_hora]);

  async function loadItems() {
    try {
      setLoading(true);
      const {data} = await api.get(`/pedidos/?id=${pedido.id}`);

      setPedido(data.data);
    } catch (error) {
      console.log('Error on Fila/index.js ==> ', error);
    } finally {
      setLoading(false);
    }
  }

  return loading ? (
    <LoadingView />
  ) : (
    <AppContainer>
      <ItemList
        data={pedido.items}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ItemPedido {...item} />}
        emptyIcon={false}
        emptyMessage={false}
        refreshing={loading}
        onRefresh={loadItems}
        Header={
          <>
            <View style={{...styled.straightHeader, backgroundColor: '#FFF'}}>
              <View style={styled.inlineItems}>
                <View style={styled.profileInfoWrap}>
                  <Image
                    resizeMode="cover"
                    style={styled.profilePhoto}
                    source={{
                      uri:
                        'https://sistema.lmsalgados.com.br/assets/images/client-logo.png',
                    }}
                  />
                  <Text style={styled.profileName}>LM Salgados </Text>
                </View>
              </View>
            </View>
            <View style={styled.inlineItems}>
              <Text style={styles.orderDateTime}>
                {'Realizado ' + dateParsed}
              </Text>
              <Text style={styles.orderMenuLink}>Ver Cardápio</Text>
            </View>
          </>
        }
        Footer={
          <>
            {pedido.observacoes !== '' && (
              <>
                <Text style={styles.orderItemTitle}>Observações</Text>
                <LineSeparator half />
                <Text style={styles.orderObservations}>
                  {pedido.observacoes}
                </Text>
              </>
            )}
            <ItemLink
              icon={pedido.metodo.icon}
              iconColor={pedido.metodo.color}
              title={pedido.metodo.nome}
            />
            <ItemLink icon="home" title="Entregar em Palmeiras, 39" />
            <TotalPedido pedido={pedido} />
            {pedido.status === 1 && (
              <Button
                onSubmitEditing={() => console.log('Attemp to cancel order...')}
                backgroundColor={commonStyles.colors.red}>
                CANCELAR PEDIDO
              </Button>
            )}
          </>
        }
      />
    </AppContainer>
  );
}
