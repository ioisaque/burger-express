import React, {createContext, useState, useEffect, useContext} from 'react';
import api from '~/services/api';

const CardapioContext = createContext({});

const CardapioProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [cardapio, setCardapio] = useState({
    data: [ ],
    categoria: false,
    produto: false,
  });

  useEffect(() => {
    getCardapio();

    return () => clearInterval(cardapio); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  async function getCardapio() {
    try {
      setLoading(true);
      const {data} = await api.post('/produtos/', {
        listar: 'cardapio',
      });

      console.log(`getCardapio ( ${data.code} ) ==> `, data.data.length);

      data.code === 200
        ? setCardapio({
            ...cardapio,
            data: data.data,
          })
        : setCardapio({
            data: [],
            ...cardapio,
          });
    } catch (error) {
      console.log('Error on getCardapio ==> ', error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <CardapioContext.Provider
      value={{
        loading,
        cardapio,
        setCardapio,
      }}>
      {children}
    </CardapioContext.Provider>
  );
};

function useCardapio() {
  const context = useContext(CardapioContext);

  if (!context)
    throw new Error('useCardapio must be used within an CardapioProvider.');

  return context;
}

export {CardapioProvider, useCardapio};
