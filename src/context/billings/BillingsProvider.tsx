import { useState } from 'react';
import { BillingsContext } from './BillingsContext';
import { ParentComponentProps } from './types';
import Billing from '../../types/models/Billing';

export const BillingsProvider: React.FC<ParentComponentProps> = ({ children }) => {
  const [billings, setBillings] = useState<Billing[]>([]);
  const hasBillings = Boolean(billings.length);
  const [currentSelectedBilling, setCurrentSelectedBilling] = useState<Billing | null>(null);

  const addBillingsToContext = (billings: Billing[] | null) => {
    if (billings) {
      setBillings(billings);
    }
  }

  const addBillingToContext = (billing: Billing | null) => {
    if (billing) {
      setBillings([...billings, billing]);
    }
  }

  const editBillingFromContext = (billing: Billing | null) => {
    if (billing) {
      setBillings(prevBillings =>
        prevBillings.map(c => (c.id === billing.id ? billing : c))
      );
    }
  }

  const removeBillingFromContext = (billingId: number) => {
    setBillings(prevBillings => prevBillings.filter(c => c.id !== billingId));
  }

  const selectBilling = (billing: Billing) => {
    setCurrentSelectedBilling(billing);
  }

  return (
    <BillingsContext.Provider
      value={{
        billings,
        hasBillings,
        currentSelectedBilling,
        addBillingsToContext,
        addBillingToContext,
        editBillingFromContext,
        removeBillingFromContext,
        selectBilling,
      }}
    >
      {children}
    </BillingsContext.Provider>
  );
};
