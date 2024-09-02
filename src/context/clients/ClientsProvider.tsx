import { useState } from 'react';
import { ClientsContext } from './ClientsContext';
import { ParentComponentProps } from './types';
import Client from '../../types/models/Client';

export const ClientsProvider: React.FC<ParentComponentProps> = ({ children }) => {
  const [clients, setClients] = useState<Client[]>([]);
  const hasClient = Boolean(clients.length);
  const [currentSelectedClient, setCurrentSelectedClient] = useState<Client | null>(null);

  const addClientsToContext = (clients: Client[] | null) => {
    if (clients) {
      setClients(clients);
    }
  }

  const addClientToContext = (client: Client | null) => {
    if (client) {
      setClients([...clients, client]);
    }
  }

  const editClientFromContext = (updatedClient: Partial<Client> | null) => {
    if (updatedClient) {
      setClients(prevClients =>
        prevClients.map(c => 
          c.id === updatedClient.id
            ? { ...c, ...updatedClient }
            : c
        )
      );
    }
  }  

  const removeClientFromContext = (clientId: number) => {
    setClients(prevClients => prevClients.filter(c => c.id !== clientId));
  }

  const cleanClientsContext = () => {
    setClients([]);
  }

  const selectClient = (client: Client) => {
    setCurrentSelectedClient(client);
  }

  return (
    <ClientsContext.Provider
      value={{
        clients,
        hasClient,
        currentSelectedClient,
        addClientsToContext,
        addClientToContext,
        editClientFromContext,
        removeClientFromContext,
        cleanClientsContext,
        selectClient,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};
