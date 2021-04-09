import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Keyboard, Text, Image, Alert, TouchableOpacity} from 'react-native';
import {AppContainer} from '~/components/styledComponents';
import React, {useState} from 'react';

import api from '~/services/api';

import styles from './styles';
import Input from '~/components/Input';
import commonStyles from '~/assets/styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SignIn({navigation}) {
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
        ? console.log(data.usuario)
        : Alert.alert('Ops...', data.dialog.toString());

      console.debug('Login/SignIn.js ==> ', data);
    } catch (error) {
      console.debug('Error on Login/SignIn.js ==> ', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppContainer>
      <KeyboardAwareScrollView
        bounces={false}
        enableOnAndroid
        enableAutomaticScroll
        contentContainerStyle={styles.loginContainer}>
        <Image
          resizeMode="contain"
          style={styles.loginLogo}
          source={commonStyles.imgs.full}
        />

        <Input
          icon="email"
          iconColor={commonStyles.colors.red}
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          // User Experience
          onPressOut={Keyboard.dismiss}
          returnKeyType="next"
          keyboardType={'email-address'}
          textContentType="telephoneNumber"
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

        <TouchableOpacity
          style={styles.googleLoginButton}
          onPress={() => navigation.navigate('App')}>
          <Icon name="google" size={25} color={commonStyles.colors.white} />
          <Text style={styles.loginButtonText}>Entrar com o Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fbLoginButton}
          onPress={() => navigation.navigate('App')}>
          <Icon name="facebook" size={25} color={commonStyles.colors.white} />
          <Text style={styles.loginButtonText}>Entrar com o Facebook</Text>
        </TouchableOpacity>

        <Image
          resizeMode="contain"
          style={styles.appCopyrights}
          source={commonStyles.imgs.copyrightDark}
        />
      </KeyboardAwareScrollView>
    </AppContainer>
  );
}

SignIn.navigationOptions = {
  title: 'Sign In',
  headerShown: false,
};
