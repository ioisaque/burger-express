import React, {useState} from 'react';
import {View, StatusBar, Text, TouchableOpacity, Image} from 'react-native';
import FBSDK, {LoginManager, AccessToken} from 'react-native-fbsdk';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import commonStyles from '~/assets/styles/commonStyles';

export default function Login({navigation}) {
  const [usuario, setUsuario] = useState(false);

  async function _fbAuth() {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function(result) {
        if (!result.isCancelled) {
          AccessToken.getCurrentAccessToken().then(data => {
            const {accessToken} = data;

            initUser(accessToken);
          });
        }
      },
      function(error) {
        alert('Ocorreu um erro na tentativa de fazer o login...\n' + error);
      },
    );
  }

  async function initUser(accessToken) {
    const fbUser = await fetch(
      'https://graph.facebook.com/v2.5/me?access_token=' +
        accessToken +
        '&fields=id,name,email,about,picture',
    )
      .then(response => response.json())
      .then(json => {
        console.debug(json);
        setUsuario(json);
        navigation.navigate('App');
      })
      .catch(() => {
        reject('ERROR GETTING DATA FROM FACEBOOK');
      });
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

      <TouchableOpacity style={styles.googleLoginButton} onPress={null}>
        <Icon name="google" size={25} color={commonStyles.colors.white} />
        <Text style={styles.loginButtonText}>Entrar com o Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fbLoginButton} onPress={_fbAuth}>
        <Icon name="facebook" size={25} color={commonStyles.colors.white} />
        <Text style={styles.loginButtonText}>Entrar com o Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.loginButtonText}>Já tenho cadastro</Text>
      </TouchableOpacity>

      <Text style={styles.appVersion}>1.0</Text>
    </View>
  );
}

Login.navigationOptions = {
  title: 'Login',
  headerShown: false,
};
