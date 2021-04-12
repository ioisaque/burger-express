import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import api from '~/services/api';

import commonStyles from '~/assets/styles/commonStyles';
import {AppContainer, AppBody} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';

import Button from '~/components/Button';
import ItemEndereco from './components/ItemEndereco';

export default function SelecionarEndereco({route, navigation}) {
  const [enderecos, setEnderecos] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    api
      .post('/doAppLogin.php', {
        facebookID: '2189311047787747',
      })
      .then(({data}) => {
        setEnderecos(data.cliente.enderecos);
      });
  }, []);

  return (
    <AppContainer>
      <AppHeader title={'Endereço de Entrega'} />
      <AppBody>
        <FlatList
          style={{marginBottom: 30}}
          data={enderecos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemEndereco
              onPress={() => {
                navigation.navigate('EditarEndereco', {endereco: item});
              }}
              {...item}
            />
          )}
          showsVerticalScrollIndicator={false}
        />

        <Button
          onSubmitEditing={() => handleCart}
          backgroundColor={commonStyles.colors.success}>
          ADICIONAR ENDERECO
        </Button>
      </AppBody>
    </AppContainer>
  );
}

SelecionarEndereco.navigationOptions = {
  title: 'Selecionar Endereco',
  headerShown: false,
};
