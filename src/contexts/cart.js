import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '~/services/api';

const CartContext = createContext({});

const CartProvider = ({children}) => {
  const [produtos, setprodutos] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadStorageData();

    return () => clearInterval(produtos); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  async function addItem(produtos) {
    setprodutos(produtos);

    await AsyncStorage.setItem('@RNCart:produtos', JSON.stringify(produtos));
  }

  async function delItem() {
    await AsyncStorage.clear();
    setprodutos(null);
  }

  async function loadStorageData() {
    const storagedUser = await AsyncStorage.getItem('@RNCart:produtos');

    if (storagedUser) {
      try {
        const storage = JSON.parse(storagedUser);
        const {data} = await api.post('/produtos/', {
          produtos: storage.produtos,
          senha: 'kraken22', //storage.senha,
        });

        data.code === 200 ? addItem(data.produtos) : delItem();
        console.log(
          'Attempting to sign in with default password... ==> ',
          data.code,
        );
      } catch (error) {
        console.log('Error on useCart ==> ', error);
      } finally {
        setLoading(false);
      }
    } else {
      console.log('AsyncStorage is empty... ');
    }
  }

  return (
    <CartContext.Provider
      value={{
        size: produtos.length,
        produtos,
        loading,
        setLoading,
        addItem,
        delItem,
      }}>
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);

  if (!context) throw new Error('useCart must be used within an CartProvider.');

  return context;
}

export {CartProvider, useCart};
