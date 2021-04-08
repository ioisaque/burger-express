import React, {useRef, useState, useEffect} from 'react';
import {Alert, Platform, View} from 'react-native';

import api from '~/services/api';

import commonStyles from '~/assets/styles/commonStyles';
import {AppWrap, AppBody, LineSeparator} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';
import ItemList from '~/components/ItemList';

import Input from '~/components/Input';
import Button from '~/components/Button';
import ItemEndereco from './components/ItemEndereco';

export default function Perfil({navigation}) {
  const [cliente, setCliente] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    setLoading(true);

    try {
      const response = await api.post('/doAppLogin.php', {
        facebookID: '2189311047787747',
      });
      const {cliente} = response.data;

      setEmail(cliente.email);
      setCpf(cliente.cpf_cnpj);
      setCelular(cliente.celular);

      setCliente(cliente);
    } catch (error) {
      console.debug('Error on Perfil/index.js ==> ', error);
    } finally {
      setLoading(false);
    }
  }

  const cpfRef = useRef();
  const celularRef = useRef();

  const SenhaRef = useRef();

  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [celular, setCelular] = useState();

  const [senha, setSenha] = useState();

  async function handleSave() {
    setLoading(true);
    try {
      const response = await api.post('/setClienteInfo.php', {
        facebookID: '2189311047787747',
        email: email,
        senha: senha,

        cpf_cnpj: cpf,
        celular: celular,
      });
      const data = response.data;

      Alert.alert(data.mensagem);

      console.debug('handleSave on Perfil/index.js ==> ', response.data);
    } catch (error) {
      console.debug('Error on Perfil/index.js ==> ', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppWrap>
      <AppHeader
        nome={cliente.nome}
        loading={!cliente && true}
        foto={
          cliente.facebookID
            ? {
                uri: `https://graph.facebook.com/${
                  cliente.facebookID
                }/picture?type=large`,
              }
            : commonStyles.imgs.user
        }
      />
      <AppBody>
        <ItemList
          ListHeaderComponent={
            <View>
              <Input
                icon="email"
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                // User Experience
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                returnKeyType="next"
                onSubmitEditing={() => cpfRef.current.focus()}
                // User Experience
              />
              <Input
                icon="account-card-details"
                value={cpf}
                onChangeText={setCpf}
                placeholder="CPF (Opcional)"
                // User Experience
                returnKeyType="next"
                keyboardType={
                  Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric'
                }
                ref={cpfRef}
                onSubmitEditing={() => celularRef.current.focus()}
                // User Experience
              />
              <Input
                icon="phone"
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
                ref={celularRef}
                onSubmitEditing={() => SenhaRef.current.focus()}
                // User Experience
              />
              <Input
                icon="key"
                value={senha}
                onChangeText={setSenha}
                placeholder="Digite sua senha"
                // User Experience
                returnKeyType="send"
                secureTextEntry
                ref={SenhaRef}
                onSubmitEditing={handleSave}
                // User Experience
              />

              <Button
                onPress={handleSave}
                backgroundColor={commonStyles.colors.black}>
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
