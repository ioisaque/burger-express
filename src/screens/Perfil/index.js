import React from 'react';
import ItemList from '~/components/ItemList';
import ItemLink from '~/components/ItemLink';
import {AppContainer, AppBody} from '~/components/styledComponents';

export default function Perfil({route, navigation}) {
  const items = [
    {
      icon: 'account-circle-outline',
      title: 'Dados Pessoais',
      screen: 'DadosPessoais',
    },
    {
      icon: 'ticket-percent-outline',
      title: 'Cupons de Desconto',
      screen: 'DadosPessoais',
    },
    {
      icon: 'bell-ring-outline',
      title: 'Notificações',
      screen: 'DadosPessoais',
    },
    {
      icon: 'map-marker-radius-outline',
      title: 'Endereços de Entrega',
      screen: 'DadosPessoais',
    },
    {
      icon: 'credit-card-multiple-outline',
      title: 'Formas de Pagamento',
      screen: 'DadosPessoais',
    },
  ];

  return (
    <AppContainer>
      <AppBody>
        <ItemList
          data={items}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <ItemLink
              {...item}
              onPress={() => {
                navigation.navigate(item.screen);
              }}
            />
          )}
          Separator={null}
        />
      </AppBody>
    </AppContainer>
  );
}
