import React, {createContext, useContext, useEffect, useState} from 'react';

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  login(): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({children}: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function login() {
    setUser({name: 'bruno'});
    console.log(user);
  }

  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <AuthContext.Provider value={{signed: true, login, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth};
