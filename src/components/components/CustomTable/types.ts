import Client from '../../../types/models/Client';
import Billing from '../../../types/models/Billing';

export interface ClientBillingRowProps {
  row: Billing;
}

export interface ClientRowProps {
  row: Client;
}

interface CustomTableProps {
  columns: string[];
  data: Billing[] | Client[];
  tableType: 'clients' | 'billings';
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (page: number) => void;
  isLoading: boolean;
}

export default CustomTableProps;
