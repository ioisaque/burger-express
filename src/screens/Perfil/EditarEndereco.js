import React, { useRef, useState } from 'react';

import api from '~/services/api';

import commonStyles from '~/assets/styles/commonStyles';

import {
    AppWrap,
    AppBody,
} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';

import Input from '~/components/Input'
import Button from '~/components/Button'


export default function EditarEndereco({ navigation }) {

    const logradouroRef = useRef();
    const numeroRef = useRef();
    const bairroRef = useRef();
    const cidadeRef = useRef();
    const estadoRef = useRef();

    const [cep, setCEP] = useState(navigation.state.params.endereco.cep)
    const [logradouro, setLogradouro] = useState(navigation.state.params.endereco.logradouro)
    const [numero, setNumero] = useState(navigation.state.params.endereco.numero)
    const [bairro, setBairro] = useState(navigation.state.params.endereco.bairro)
    const [cidade, setCidade] = useState(navigation.state.params.endereco.cidade)
    const [estado, setEstado] = useState(navigation.state.params.endereco.estado)

    function handleSave() {

    }

    function handleRemove() {

    }

    return (
        <AppWrap>
            <AppHeader title={'Editar Endereço'} />
            <AppBody>

                <Input
                    value={cep}
                    onChangeText={setCEP}
                    placeholder="CEP"
                    returnKeyType="next"
                    onSubmitEditing={() => logradouroRef.current.focus()} />
                <Input
                    value={logradouro}
                    onChangeText={setLogradouro}
                    placeholder="Logradouro: rua, avenida, etc."
                    returnKeyType="next"
                    ref={logradouroRef}
                    onSubmitEditing={() => numeroRef.current.focus()} />
                <Input
                    value={numero}
                    onChangeText={setNumero}
                    placeholder="Número da residência e/ou apt."
                    returnKeyType="next"
                    ref={numeroRef}
                    onSubmitEditing={() => bairroRef.current.focus()} />
                <Input
                    value={bairro}
                    onChangeText={setBairro}
                    placeholder="Bairro ou distrito."
                    returnKeyType="next"
                    ref={bairroRef}
                    onSubmitEditing={() => cidadeRef.current.focus()} />
                <Input
                    value={cidade}
                    onChangeText={setCidade}
                    placeholder="Cidade"
                    returnKeyType="next"
                    ref={cidadeRef}
                    onSubmitEditing={() => estadoRef.current.focus()} />
                <Input
                    value={estado}
                    onChangeText={setEstado}
                    placeholder="Estado"
                    returnKeyType="send"
                    ref={estadoRef}
                    onSubmitEditing={() => handleSave} />

                <Button
                    onSubmitEditing={() => handleSave}
                    backgroundColor={commonStyles.colors.black}>SALVAR</Button>
                <Button
                    onSubmitEditing={() => handleRemove}
                    backgroundColor={commonStyles.colors.red}>REMOVER</Button>

            </AppBody>
        </AppWrap>
    );
}

EditarEndereco.navigationOptions = {
    title: 'Editar Endereço',
    headerShown: false
}