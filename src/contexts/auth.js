import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '~/services/api';

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadStorageData();
  });

  async function signIn(usuario) {
    setUsuario(usuario);

    await AsyncStorage.setItem('@RNAuth:usuario', JSON.stringify(usuario));
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUsuario(null);
  }

  async function loadStorageData() {
    const storagedUser = await AsyncStorage.getItem('@RNAuth:usuario');

    if (storagedUser) {
      try {
        //JSON.parse(jsonValue)
        const dados = {
          usuario: storagedUser.usuario,
          senha: storagedUser.senha,
        };

        const {data} = await api.post('/usuarios/', dados);

        console.log('Attempting to sign in... ', data, dados);
        console.log('DADOS => ', dados);
        console.log('RESPONSE => ', data);
        console.log('USUARIO => ', usuario);

        data.code === 200 ? signIn(data.usuario) : signOut;
      } catch (error) {
        console.log('Error on useAuth ==> ', error);
      } finally {
        setLoading(false);
      }
    } else {
      console.log('AsyncStorage is empty... ');
    }
  }

  return (
    <AuthContext.Provider
      value={{signed: !!usuario, usuario, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider.');

  return context;
}

export {AuthProvider, useAuth};
