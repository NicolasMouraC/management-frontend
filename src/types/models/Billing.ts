import { Dayjs } from 'dayjs';

type Billing = {
  id: number;
  description: string;
  value: number;
  dueDate: Dayjs | null;
  isPayed: boolean;
  clientId: number;
};

export default Billing;
