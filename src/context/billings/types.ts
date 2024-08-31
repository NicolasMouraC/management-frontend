import Billing from '../../types/models/Billing';

export interface ParentComponentProps {
  children: React.ReactNode;
}

export interface BillingsContextType {
  billings: Billing[];
  hasBillings: boolean;
  currentSelectedBilling: Billing | null;
  addBillingsToContext: (billing: Billing[] | null) => void;
  addBillingToContext: (billing: Billing | null) => void;
  editBillingFromContext: (billing: Billing | null) => void;
  removeBillingFromContext: (billingId: number) => void;
  selectBilling: (billing: Billing) => void;
}
