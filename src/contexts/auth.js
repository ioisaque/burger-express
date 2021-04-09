import React, {useState, createContext} from 'react';

const AuthContext = createContext({signed: true});

export const AuthProvider = ({children}) => {
  const [usuario, setUsuario] = useState();

  return (
    <AuthContext.Provider
      value={{signed: !!usuario, usuario: usuario, setUsuario: setUsuario}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
