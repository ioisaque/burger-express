import React, {useRef, useState} from 'react';
import Input from '~/components/Input';
import {
  Platform,
  StatusBar,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import api from '~/services/api';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import commonStyles from '~/assets/styles/commonStyles';

export default function SignIn({navigation}) {
  const [usuario, setUsuario] = useState(false);
  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const SenhaRef = useRef();

  async function login() {
    setLoading(true);
    try {
      const {data} = await api.post('/usuarios/', {
        usuario: email,
        senha: senha,
      });

      data.code === 200
        ? navigation.navigate('App')
        : Alert.alert('Ops...', data.dialog.toString());

      console.debug('Login/SignIn.js ==> ', data);
    } catch (error) {
      console.debug('Error on Login/SignIn.js ==> ', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.loginContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={commonStyles.colors.red}
      />
      <Image
        source={commonStyles.imgs.full}
        style={styles.loginLogo}
        resizeMode="contain"
      />

      <Input
        icon="email"
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        // User Experience
        returnKeyType="next"
        keyboardType={'email-address'}
        textContentType="telephoneNumber"
        onSubmitEditing={() => SenhaRef.current.focus()}
        // User Experience
      />
      <Input
        icon="key"
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        // User Experience
        returnKeyType="send"
        secureTextEntry
        ref={SenhaRef}
        onSubmitEditing={login}
        // User Experience
      />

      <TouchableOpacity style={styles.loginButton} onPress={login}>
        <Icon name="login" size={25} color={commonStyles.colors.white} />
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.appVersion}>1.0</Text>
    </View>
  );
}

SignIn.navigationOptions = {
  title: 'Sign In',
  headerShown: false,
};
