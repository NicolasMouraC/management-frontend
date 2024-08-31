import { createContext, useContext } from 'react';
import { ClientsContextType } from './types';

export const ClientsContext = createContext<ClientsContextType | null>(null);

export const useClientsContext = () => {
  const context = useContext(ClientsContext);
  if (!context) {
    throw new Error('ClientsProvider Error');
  }
  return context;
};
