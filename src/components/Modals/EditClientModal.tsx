import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CustomModal from "../components/CustomModal";
import CustomButton from "../components/CustomButton";
import ClientForm from "../Forms/ClientForm";
import { editClient } from "../../services/apiServices/Clients";
import { useClientsContext } from "../../context/clients/ClientsContext";
import { EditClientModalProps } from "./types";

const EditClientModal: React.FC<EditClientModalProps> = ({
  onClose,
  open,
  clientId,
}) => {
  const { currentSelectedClient, editClientFromContext } = useClientsContext();
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(currentSelectedClient?.name || '');
    setDocument(currentSelectedClient?.document || '');
    setPhone(currentSelectedClient?.phone || '');
    setAddress(currentSelectedClient?.address || '');
  }, [currentSelectedClient]);

  const validateForm = () => {
    if (!name.trim() || !document.trim() || !phone.trim() || !address.trim()) {
      toast.error("Todos os campos são obrigatórios.");
      return false;
    }

    if (document.length !== 11) {
      toast.error("O documento deve ter 11 caracteres.");
      return false;
    }

    return true;
  };

  const handleCreateClient = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await editClient(clientId, {
        address,
        document,
        name,
        phone,
      });

      editClientFromContext(response);
      toast.success('Cliente editado com sucesso!');
      onClose();
    } catch {
      toast.error('Erro ao editar cliente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomModal open={open} onClose={onClose}>
      <aside className="flex flex-col gap-5 bg-white p-8 min-w-[400px] text-black rounded-xl">
        <div className="flex justify-center">
          <h1 className="font-black text-[32px]">
            Editar Cliente
          </h1>
        </div>
        <ClientForm
          name={name}
          setName={setName}
          document={document}
          setDocument={setDocument}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAddress}
        />
        <CustomButton onClick={handleCreateClient} disabled={loading}>
          {loading ? 'Salvando...' : 'Salvar'}
        </CustomButton>
      </aside>
    </CustomModal>
  );
};

export default EditClientModal;
