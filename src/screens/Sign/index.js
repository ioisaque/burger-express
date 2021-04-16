import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Text, Alert, TouchableOpacity} from 'react-native';
import {AppBody} from '~/components/styledComponents';
import React, {useState} from 'react';
import Image from '~/components/Image';
import {useAuth} from '~/contexts/auth';

import api from '~/services/api';

import styles from './styles';
import Input from '~/components/Input';
import commonStyles from '~/assets/styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SignIn({route, navigation}) {
  const {signIn} = useAuth();
  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  async function login() {
    setLoading(true);
    try {
      const {data} = await api.post('/usuarios/', {
        usuario: email,
        senha: senha,
      });

      data.code === 200
        ? signIn(data.usuario)
        : Alert.alert('Ops...', data.dialog.toString());

      console.log('Login/SignIn.js ==> ', data);
    } catch (error) {
      console.log('Error on Login/SignIn.js ==> ', error);
    } finally {
      setLoading(false);
    }
  }

  async function fakeLogin() {
    setLoading(true);
    try {
      const {data} = await api.get('/clientes/?id=1');

      data.code === 200 ? signIn(data.data) : Alert.alert('Ops...', data.data);

      console.log('FakeLogin/SignIn.js ==> ', data);
    } catch (error) {
      console.log('Error on Login/SignIn.js ==> ', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAwareScrollView
      bounces={false}
      enableOnAndroid
      enableAutomaticScroll
      contentContainerStyle={styles.loginContainer}>
      <Image
        resizeMode="contain"
        style={styles.loginLogo}
        source={commonStyles.imgs.appLogo}
      />

      <AppBody>
        <Input
          icon="email"
          iconColor={commonStyles.colors.red}
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          // User Experience
          returnKeyType="send"
          keyboardType={'email-address'}
          textContentType="telephoneNumber"
          onSubmitEditing={login}
          enablesReturnKeyAutomatically
          // User Experience
        />
        <Input
          icon="key"
          iconColor={commonStyles.colors.red}
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          // User Experience
          returnKeyType="send"
          secureTextEntry
          onSubmitEditing={login}
          enablesReturnKeyAutomatically
          // User Experience
        />

        <TouchableOpacity style={styles.loginButton} onPress={login}>
          <Icon name="login" size={25} color={commonStyles.colors.white} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleLoginButton} onPress={fakeLogin}>
          <Icon name="google" size={25} color={commonStyles.colors.white} />
          <Text style={styles.loginButtonText}>Entrar com o Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fbLoginButton} onPress={fakeLogin}>
          <Icon name="facebook" size={25} color={commonStyles.colors.white} />
          <Text style={styles.loginButtonText}>Entrar com o Facebook</Text>
        </TouchableOpacity>
      </AppBody>

      <Image
        resizeMode="contain"
        style={styles.appCopyrights}
        source={commonStyles.imgs.copyrightDark}
      />
    </KeyboardAwareScrollView>
  );
}

SignIn.navigationOptions = {
  title: 'Sign In',
  headerShown: false,
};
