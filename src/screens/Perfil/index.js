import React, {useState, useEffect} from 'react';
import {Platform, View} from 'react-native';

import api from '~/services/api';

import commonStyles from '~/assets/styles/commonStyles';
import {AppWrap, AppBody, LineSeparator} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';
import ItemList from '~/components/ItemList';

import Input from '~/components/Input';
import Button from '~/components/Button';
import ItemEndereco from './components/ItemEndereco';

export default function Perfil({route, navigation}) {
  const [cliente, setCliente] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    setLoading(true);

    try {
      const {data} = await api.get(`/clientes/?id=${1}`);

      let cliente = data.data;
      cliente.enderecos = [cliente];

      setCpf(cliente.cpf_cnpj);
      setCelular(cliente.celular);

      setCliente(cliente);
      console.log('CLIENTE ==> ', cliente);
    } catch (error) {
      console.log('Error on Perfil/index.js ==> ', error);
    } finally {
      setLoading(false);
    }
  }

  const [cpf, setCpf] = useState();
  const [celular, setCelular] = useState();
  const [senha, setSenha] = useState();

  async function handleSave() {
    setLoading(true);
    try {
      const {data} = await api.post('/clientes/', {
        cliente: {
          senha: senha,
          cpf_cnpj: cpf,
          celular: celular,
        },
      });

      console.log('handleSave on Perfil/index.js ==> ', data.data);
    } catch (error) {
      console.log('Error on Perfil/index.js ==> ', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppWrap>
      <AppHeader
        loading={loading}
        title={cliente.nome}
        foto={commonStyles.imgs.user}
      />
      <AppBody>
        <ItemList
          ListHeaderComponent={
            <View>
              <Input
                icon="account-box-outline"
                value={cpf}
                onChangeText={setCpf}
                placeholder="CPF (Opcional)"
                // User Experience
                returnKeyType="next"
                keyboardType={
                  Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric'
                }
                // User Experience
              />
              <Input
                icon="cellphone-iphone"
                value={celular}
                onChangeText={setCelular}
                placeholder="Celular"
                // User Experience
                returnKeyType="next"
                keyboardType={
                  Platform.OS === 'ios'
                    ? 'numbers-and-punctuation'
                    : 'phone-pad'
                }
                textContentType="telephoneNumber"
                // User Experience
              />
              <Input
                icon="shield-lock-outline"
                value={senha}
                onChangeText={setSenha}
                placeholder="Digite sua senha"
                // User Experience
                returnKeyType="send"
                secureTextEntry
                onSubmitEditing={handleSave}
                // User Experience
              />

              <Button onPress={handleSave} color={commonStyles.colors.red}>
                SALVAR
              </Button>

              <LineSeparator />
            </View>
          }
          data={cliente.enderecos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemEndereco
              onPress={() => {
                navigation.navigate('EditarEndereco', {endereco: item});
              }}
              {...item}
            />
          )}
          onRefresh={loadItems}
          refreshing={loading}
        />
      </AppBody>
    </AppWrap>
  );
}

Perfil.navigationOptions = {
  title: 'Perfil',
  headerShown: false,
};
