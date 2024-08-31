import { Dayjs } from 'dayjs';

export interface BillingFormProps {
  value: string | number;
  setValue: (value: string) => void;
  dueDate: Dayjs | null;
  setDueDate: (dueDate: Dayjs | null) => void;
  isPayed: boolean;
  setIsPayed: (isPayed: boolean) => void;
  description: string;
  setDescription: (description: string) => void;
}

export interface ClientFormProps {
  name: string;
  setName: (name: string) => void;
  document: string;
  setDocument: (document: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  address: string;
  setAddress: (address: string) => void;
}
