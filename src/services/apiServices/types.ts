import { Dayjs } from 'dayjs';

export interface loginPayload {
  email: string;
  password: string;
}

export interface registerPayload {
  name: string;
  email: string;
  password: string;
}

export interface clientPayload {
  name: string;
  document: string;
  phone: string;
  address: string;
}

export interface billingPayload {
  description: string;
  value: string | number;
  dueDate: string | Dayjs;
  isPayed: boolean;
}
