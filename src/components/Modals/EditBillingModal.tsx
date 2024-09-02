import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import dayjs, { Dayjs } from "dayjs";
import CustomModal from "../components/CustomModal";
import CustomButton from "../components/CustomButton";
import BillingForm from "../Forms/BillingForm";
import { editBilling } from "../../services/apiServices/Clients";
import { useBillingsContext } from "../../context/billings/BillingsContext";
import { EditBillingModalProps } from "./types";

const EditBillingModal: React.FC<EditBillingModalProps> = ({
  onClose,
  open,
  billingId,
  clientId,
}) => {
  const { currentSelectedBilling, editBillingFromContext } = useBillingsContext();
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
      toast.error('Valor inválido.');
      return false;
    }

    return true;
  };

  const handleEditClient = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await editBilling(
        clientId,
        billingId,
        {
          description,
          value,
          dueDate: dueDate?.toISOString() || '',
          isPayed,
        }
      );

      editBillingFromContext(response);
      toast.success('Cobrança editada com sucesso!');
      onClose();
    } catch {
      toast.error('Erro ao editar cobrança.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setDescription(currentSelectedBilling?.description || '');
    setValue(currentSelectedBilling?.value || '');
    setDueDate(dayjs(currentSelectedBilling?.dueDate) || null);
    setIsPayed(currentSelectedBilling?.isPayed || false);
  }, [currentSelectedBilling]);

  return (
    <CustomModal open={open} onClose={onClose}>
      <aside
        className="flex flex-col gap-5 bg-white p-8 min-w-[400px] text-black rounded-xl"
        role="dialog"
        aria-labelledby="modal-title"
      >
        <div className="flex justify-center">
          <h1 className="font-black text-[32px]" id="modal-title">
            Editar Cobrança
          </h1>
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
        <CustomButton
          onClick={handleEditClient}
          disabled={loading}
          aria-label="Confirmar edição de cobrança"
        >
          {loading ? 'Salvando...' : 'Confirmar'}
        </CustomButton>
      </aside>
    </CustomModal>
  );
};

export default EditBillingModal;
