import React, {useRef, useState} from 'react';

import api from '~/services/api';

import commonStyles from '~/assets/styles/commonStyles';

import {AppWrap, AppBody} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';

import Input from '~/components/Input';
import Button from '~/components/Button';
import {Platform} from 'react-native';

export default function EditarEndereco({navigation}) {
  const [loading, setLoading] = useState(true);

  const logradouroRef = useRef();
  const numeroRef = useRef();
  const bairroRef = useRef();
  const cidadeRef = useRef();
  const estadoRef = useRef();

  const [cep, setCEP] = useState(navigation.state.params.endereco.cep);
  const [logradouro, setLogradouro] = useState(
    navigation.state.params.endereco.logradouro,
  );
  const [numero, setNumero] = useState(navigation.state.params.endereco.numero);
  const [bairro, setBairro] = useState(navigation.state.params.endereco.bairro);
  const [cidade, setCidade] = useState(navigation.state.params.endereco.cidade);
  const [estado, setEstado] = useState(navigation.state.params.endereco.estado);

  async function handleSave() {
    setLoading(true);
    try {
      const {data} = await api.post('/clientes/', {
        id_cliente: 1,
        endereco: {
          id: null,
          cep: cep,
          estado: estado,
          cidade: cidade,
          bairro: bairro,
          numero: numero,
          logradouro: logradouro,
        },
      });

      console.debug('handleSave on Perfil/index.js ==> ', data);
    } catch (error) {
      console.debug('Error on Perfil/index.js ==> ', error);
    } finally {
      setLoading(false);
    }
  }

  function handleRemove() {}

  return (
    <AppWrap>
      <AppHeader loading={loading} title={'Editar Endereço'} />
      <AppBody>
        <Input
          value={cep}
          onChangeText={setCEP}
          placeholder="CEP"
          // User Experience
          keyboardType={
            Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric'
          }
          textContentType="postalCode"
          returnKeyType="next"
          onSubmitEditing={() => logradouroRef.current.focus()}
          // User Experience
        />
        <Input
          value={logradouro}
          onChangeText={setLogradouro}
          placeholder="Logradouro: rua, avenida, etc."
          // User Experience
          textContentType="streetAddressLine1"
          returnKeyType="next"
          ref={logradouroRef}
          onSubmitEditing={() => numeroRef.current.focus()}
          // User Experience
        />
        <Input
          value={numero}
          onChangeText={setNumero}
          placeholder="Número da residência e/ou apt."
          // User Experience
          textContentType="streetAddressLine2"
          returnKeyType="next"
          ref={numeroRef}
          onSubmitEditing={() => bairroRef.current.focus()}
          // User Experience
        />
        <Input
          value={bairro}
          onChangeText={setBairro}
          placeholder="Bairro ou distrito."
          // User Experience
          textContentType="sublocality"
          returnKeyType="next"
          ref={bairroRef}
          onSubmitEditing={() => cidadeRef.current.focus()}
          // User Experience
        />
        <Input
          value={cidade}
          onChangeText={setCidade}
          placeholder="Cidade"
          // User Experience
          textContentType="addressCity"
          returnKeyType="next"
          ref={cidadeRef}
          onSubmitEditing={() => estadoRef.current.focus()}
          // User Experience
        />
        <Input
          value={estado}
          onChangeText={setEstado}
          placeholder="Estado"
          // User Experience
          textContentType="addressState"
          returnKeyType="send"
          ref={estadoRef}
          onSubmitEditing={() => handleSave}
          // User Experience
        />
        <Button
          onSubmitEditing={() => handleRemove}
          backgroundColor={commonStyles.colors.black}>
          REMOVER
        </Button>
        <Button
          onSubmitEditing={() => handleSave}
          backgroundColor={commonStyles.colors.red}>
          SALVAR
        </Button>
      </AppBody>
    </AppWrap>
  );
}

EditarEndereco.navigationOptions = {
  title: 'Editar Endereço',
  headerShown: false,
};
