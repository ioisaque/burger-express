import React, {useState} from 'react';
import {View, StatusBar, Text, TouchableOpacity, Image} from 'react-native';
import FBSDK, {LoginManager, AccessToken} from 'react-native-fbsdk';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import commonStyles from '~/assets/styles/commonStyles';

import auth from '@react-native-firebase/auth'

export default function SignIn({navigation}) {
  const [usuario, setUsuario] = useState(false);

  async function _fbAuth() {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function(result) {
        if (!result.isCancelled) {
          AccessToken.getCurrentAccessToken().then(data => initUser(data.accessToken));
        }

      },
      function(error) {
        alert('Ocorreu um erro na tentativa de fazer o login...\n' + error);
      },
    );
  }

  async function initUser(accessToken) {
    // Get facebook credential
    const facebookCredential = auth.FacebookAuthProvider.credential(accessToken);

    // Sign-in the user with the credential
    await auth().signInWithCredential(facebookCredential)

    try {
      // Fetch facebook api
      const resp = await fetch(
        'https://graph.facebook.com/v2.5/me?access_token=' +
          accessToken +
          '&fields=id,name,email,about,picture',
      )
  
      // Parse to json
      const json = await resp.json()
      console.log(json);

      // Add to state
      setUsuario(json)
  
      // Navigate to App screen
      navigation.navigate('App');
    } catch (e) {
      console.log('ERROR GETTING DATA FROM FACEBOOK')
      console.log(e.message)
    }

  }

  return (
    <View style={styles.loginContainer}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={commonStyles.colors.gold}
      />
      <Image
        source={commonStyles.imgs.full}
        style={styles.loginLogo}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.fbLoginButton} onPress={_fbAuth}>
        <Icon name="facebook" size={25} color={commonStyles.colors.white} />
        <Text style={styles.loginButtonText}>Entrar com o Facebook.</Text>
      </TouchableOpacity>
    </View>
  );
}

SignIn.navigationOptions = {
  title: 'Login',
  headerShown: null,
};
