import CustomModal from "../components/CustomModal";
import { deleteClient,deleteBilling } from "../../services/apiServices/Clients";
import { DeleteRowModalProps } from "./types";
import toast from "react-hot-toast";
import { useClientsContext } from "../../context/clients/ClientsContext";
import { useBillingsContext } from "../../context/billings/BillingsContext";

const DeleteRowModal: React.FC<DeleteRowModalProps> = ({
  onClose,
  open,
  billingId,
  clientId,
  rowType,
}) => {
  const { removeClientFromContext } = useClientsContext();
  const { removeBillingFromContext } = useBillingsContext();

  const handleDeleteRow = async () => {
    try {
      if (rowType === "billings") {
        await deleteBilling(clientId, billingId);
        removeBillingFromContext(billingId)
      } else if (rowType === "clients") {
        await deleteClient(clientId);
        removeClientFromContext(clientId)
      }

      toast.success('Cliente deletado com sucesso!')
      onClose();
    } catch {
      toast.error('Erro ao deletar cliente.');
    }
  }
  
  return (
    <CustomModal open={open} onClose={onClose}>
      <aside className="flex flex-col gap-5 bg-white p-8 min-w-[400px] text-black rounded-xl">
      <div className="flex justify-center">
        <h1 className="font-black text-[32px]">
          Deletar?
        </h1>
      </div>
      <div className="flex gap-10 justify-between">
        <button
          className=" w-full text-[20px] p-1 rounded-lg bg-[#000000] text-white"
          onClick={onClose}
        >
          Não
        </button>
        <button
          className=" w-full text-[20px] p-1 rounded-lg bg-[#000000] text-white"
          onClick={handleDeleteRow}
        >
          Sim
        </button>
      </div>
    </aside>
    </CustomModal>
  )
}

export default DeleteRowModal;