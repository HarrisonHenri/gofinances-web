import { AxiosRequestHeaders } from 'axios';
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { auth, GoogleProvider } from '../config/firebase';
import { api } from '../services/api';

interface AuthContextData {
  isAuth: boolean;
  loading: boolean;
  signIn(): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const signIn = useCallback(() => {
    setLoading(true);
    auth.signInWithPopup(new GoogleProvider());
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged(userCred => {
      if (userCred) {
        userCred.getIdToken().then(token => {
          setIsAuth(true);
          setLoading(false);
          (
            api.defaults.headers as unknown as AxiosRequestHeaders
          ).Authorization = `Bearer ${token}`;
        });
      }
    });
  }, []);

  const signOut = useCallback(async () => {
    setIsAuth(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
