import Client from '../../types/models/Client';

export interface ParentComponentProps {
  children: React.ReactNode;
}

export interface ClientsContextType {
  clients: Client[];
  hasClient: boolean;
  currentSelectedClient: Client | null;
  addClientsToContext: (client: Client[] | null) => void;
  addClientToContext: (client: Client | null) => void;
  editClientFromContext: (client: Client | null) => void;
  removeClientFromContext: (clientId: number) => void;
  selectClient: (client: Client) => void;
}
