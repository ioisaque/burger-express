import React, {createContext, useState, useEffect, useContext} from 'react';
import api from '~/services/api';

const CardapioContext = createContext({});

const CardapioProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [cardapio, setCardapio] = useState({
    categoria: false,
    produto: false,
    adicionais: false,
  });

  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState(false);

  useEffect(() => {
    getCategorias();

    return () => clearInterval(categorias); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  async function getCategorias() {
    try {
      setLoading(true);
      const {data} = await api.post('/produtos/', {
        listar: 'categorias',
      });

      console.log(`getCategorias ( ${data.code} ) ==> `, data.data.length);

      data.code === 200 ? setCategorias(data.data) : setCategorias(false);
    } catch (error) {
      console.log('Error on getCategorias ==> ', error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }
  async function getProdutos(categoria = cardapio.categoria) {
    try {
      setLoading(true);
      setCardapio({
        categoria: categoria,
        produto: cardapio.produto,
        adicionais: [],
      });
      const {data} = await api.post('/produtos/', {
        listar: 'categoria',
        id_categoria: categoria.id,
      });

      console.log(`getProdutos ( ${data.code} ) ==> `, categoria.nome);

      if (data.code === 200) {
        let produtos = [];
        let adicionais = [];

        data.data.map(item => {
          item.is_adicional > 0 ? adicionais.push(item) : produtos.push(item);
        });

        setProdutos(produtos);
        setCardapio({
          categoria: categoria,
          produto: cardapio.produto,
          adicionais: adicionais,
        });
      } else {
        setProdutos([]);
        setCardapio({
          categoria: categoria,
          produto: cardapio.produto,
          adicionais: [],
        });
      }
    } catch (error) {
      console.log('Error on getProdutos ==> ', error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <CardapioContext.Provider
      value={{
        cardapio,
        setCardapio,
        categorias,
        getCategorias,
        produtos,
        getProdutos,
        setProdutos,
        loading,
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
