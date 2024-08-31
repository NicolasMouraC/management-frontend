import Billing from './Billing';

type Client = {
  id: number;
  name: string;
  document: string;
  phone: string;
  address: string;
  userId: number;
  user: null;
  billings: Billing[];
  lateBillingsCount?: number;
  unpaidBillingsCount?: number;
  paidBillingsCount?: number;
};

export default Client;
