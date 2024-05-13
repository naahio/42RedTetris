import { PropsWithChildren, createContext } from 'react';
import { User } from '../interfaces/user';

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
}

export const initialState: AuthContextType = {
  user: null,
  isAuthenticated: false,
};

export const AuthContext = createContext<AuthContextType>(initialState);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <AuthContext.Provider value={initialState}>{children}</AuthContext.Provider>;
};
