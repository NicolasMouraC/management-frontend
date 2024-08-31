interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export interface EditClientModalProps extends ModalProps {
  clientId: number;
}

export interface EditBillingModalProps extends ModalProps {
  clientId: number;
  billingId: number;
}


export interface DeleteRowModalProps extends ModalProps {
  clientId: number;
  billingId: number;
  rowType: 'clients' | 'billings';
} 

export default ModalProps;