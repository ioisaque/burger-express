import React, {useEffect} from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';

// import { Container } from './styles';

export default function AuthLoading(props) {
  const {navigation} = props;

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('App');
      } else {
        navigation.navigate('Login');
      }
    });
  }, []);

  // Make your logo loading animation rsrs
  return <View />;
}
