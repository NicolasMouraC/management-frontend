import { useState } from "react";
import toast from "react-hot-toast";
import { Dayjs } from "dayjs";
import CustomModal from "../components/CustomModal";
import CustomButton from "../components/CustomButton";
import BillingForm from "../Forms/BillingForm";
import { createBilling } from "../../services/apiServices/Clients";
import ModalProps from "./types";
import { useClientsContext } from "../../context/clients/ClientsContext";
import { useBillingsContext } from "../../context/billings/BillingsContext";

const CreateNewClientBillingModal: React.FC<ModalProps> = ({
  onClose,
  open,
}) => {
  const { currentSelectedClient } = useClientsContext();
  const { addBillingToContext } = useBillingsContext();
  const [description, setDescription] = useState('');
  const [value, setValue] = useState<string | number>('');
  const [dueDate, setDueDate] = useState<Dayjs | null>(null);
  const [isPayed, setIsPayed] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!description.trim() || !value || !dueDate) {
      toast.error('Todos os campos são obrigatórios.');
      return false;
    }

    if (isNaN(Number(value)) || Number(value) <= 0) {
      toast.error('O valor da cobrança deve ser um número positivo.');
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setDescription('');
    setValue('');
    setDueDate(null);
    setIsPayed(false);
  }

  const handleCreateBilling = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await createBilling(
        currentSelectedClient?.id as number,
        {
          description,
          value,
          dueDate: dueDate?.toISOString() || '',
          isPayed,
        }
      );
      toast.success('Cobrança criada com sucesso!');
      resetForm();
      addBillingToContext(response);
      onClose();
    } catch {
      toast.error('Erro ao criar cobrança.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <CustomModal open={open} onClose={onClose}>
      <aside className="flex flex-col gap-5 bg-white p-8 min-w-[400px] text-black rounded-xl">
        <div className="flex justify-center">
          <p className="font-black text-[32px]">
            Criar nova cobrança
          </p>
        </div>
        <BillingForm
          value={value}
          setValue={setValue}
          dueDate={dueDate}
          setDueDate={setDueDate}
          isPayed={isPayed}
          setIsPayed={setIsPayed}
          description={description}
          setDescription={setDescription}
        />
        <CustomButton onClick={handleCreateBilling} disabled={loading}>
          {loading ? 'Criando...' : 'Confirmar'}
        </CustomButton>
      </aside>
    </CustomModal>
  );
}

export default CreateNewClientBillingModal;
