import React, {createContext, useState, useEffect, useContext} from 'react';
import api from '~/services/api';

const ClienteContext = createContext({});

const ClienteProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [cliente, setCliente] = useState([]);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    getCliente();

    return () => clearInterval(cliente); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  async function getCliente() {
    try {
      setLoading(true);
      const {data} = await api.get('/clientes/?id=1');

      console.log(`getCliente ( ${data.code} ) ==> `, data.data.nome);

      data.code === 200 ? setCliente(data.data) : setCliente(null);
    } catch (error) {
      console.log('Error on getCliente ==> ', error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  async function getHistorico() {
    try {
      setLoading(true);
      const {data} = await api.get(`/pedidos/?id_cliente=${cliente.id}`);

      console.log(`getHistorico ( ${data.code} ) ==> `, data.data.length);

      data.code === 200 ? setHistorico(data.data) : setHistorico(null);
    } catch (error) {
      console.log('Error on getHistorico ==> ', error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ClienteContext.Provider
      value={{
        loading,
        cliente,
        getCliente,
        historico,
        getHistorico,
      }}>
      {children}
    </ClienteContext.Provider>
  );
};

function useCliente() {
  const context = useContext(ClienteContext);

  if (!context)
    throw new Error('useCliente must be used within an ClienteProvider.');

  return context;
}

export {ClienteProvider, useCliente};
