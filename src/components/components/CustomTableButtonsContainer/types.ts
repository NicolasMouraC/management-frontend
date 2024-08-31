interface CustomTableButtonsContainerProps {
  additionalAction?: () => void;
  additionalActionText?: string;
  clientId: number;
  billingId?: number;
  tableType: 'clients' | 'billings';
}

export default CustomTableButtonsContainerProps;
