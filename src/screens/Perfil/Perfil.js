import React, { useRef, useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import api from '~/services/api';
import AppWrap from '~/components/AppWrap';
import AppHeader from '~/components/AppHeader';
import AppBody from '~/components/AppBody';
import AppLoding from '~/components/AppLoding';

import Input from '~/components/Input'
import Button from '~/components/Button'

import ItemEndereco from './components/ItemEndereco'
import LineSeparator from '~/components/LineSeparator'

import commonStyles from '~/assets/styles/commonStyles';

export default function Perfil({ navigation }) {

    const [cliente, setCliente] = useState(false)

    useEffect(() => {
        api.post('/doAppLogin.php', {
            facebookID: '2189311047787747',
        })
            .then(({ data }) => {

                setEmail(data.cliente.email);
                setCpf(data.cliente.cpf_cnpj);
                setCelular(data.cliente.celular);

                setCliente(data.cliente);
            });
    }, []);

    const cpfRef = useRef();
    const celularRef = useRef();

    const Senha1Ref = useRef();
    const Senha2Ref = useRef();

    const [email, setEmail] = useState()
    const [cpf, setCpf] = useState()
    const [celular, setCelular] = useState()

    const [senha1, setSenha1] = useState()
    const [senha2, setSenha2] = useState()

    function handleSave() {

    }

    return cliente ? (
        <AppWrap>
            <AppHeader
                nome={cliente.nome}
                foto={cliente.facebookID ? { uri: `https://graph.facebook.com/${cliente.facebookID}/picture?type=large` } : commonStyles.placeholders.user} />
            <AppBody>

                <Input
                    icon="email"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    returnKeyType="next"
                    keyboardType="email-address"
                    onSubmitEditing={() => cpfRef.current.focus()} />
                <Input
                    icon="account-card-details"
                    value={cpf}
                    onChangeText={setCpf}
                    placeholder="CPF (Opcional)"
                    returnKeyType="next"
                    keyboardType="numeric"
                    ref={cpfRef}
                    onSubmitEditing={() => celularRef.current.focus()} />
                <Input
                    icon="phone"
                    value={celular}
                    onChangeText={setCelular}
                    placeholder="Celular"
                    returnKeyType="next"
                    keyboardType="phone-pad"
                    ref={celularRef}
                    onSubmitEditing={() => Senha1Ref.current.focus()} />
                <Input
                    icon="key"
                    value={senha1}
                    onChangeText={setSenha1}
                    placeholder="Nova senha"
                    returnKeyType="next"
                    secureTextEntry
                    ref={Senha1Ref}
                    onSubmitEditing={() => Senha2Ref.current.focus()} />
                <Input
                    icon="textbox-password"
                    value={senha2}
                    onChangeText={setSenha2}
                    placeholder="Confirme a senha"
                    returnKeyType="send"
                    secureTextEntry
                    ref={Senha2Ref}
                    onSubmitEditing={() => handleSave} />

                <Button
                    onSubmitEditing={() => handleSave}
                    backgroundColor={commonStyles.colors.black}>SALVAR</Button>

                <LineSeparator />

                <FlatList
                    data={cliente.enderecos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ItemEndereco onPress={() => {
                        this.props.navigation.navigate('EditarEndereco', { endereco: item })
                    }} {...item} />}
                />

            </AppBody>
        </AppWrap>
    ) : (
            <AppLoding color={commonStyles.colors.black}/>
        );
}

Perfil.navigationOptions = {
    title: 'Perfil',
    headerShown: false
}