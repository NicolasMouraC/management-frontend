import { createContext, useContext } from 'react';
import { BillingsContextType } from './types';

export const BillingsContext = createContext<BillingsContextType | null>(null);

export const useBillingsContext = () => {
  const context = useContext(BillingsContext);
  if (!context) {
    throw new Error('BillingsProvider Error');
  }
  return context;
};
