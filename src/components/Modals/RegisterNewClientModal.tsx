import { useState } from "react";
import toast from "react-hot-toast";
import CustomModal from "../components/CustomModal";
import ClientForm from "../Forms/ClientForm";
import CustomButton from "../components/CustomButton";
import { createClient } from "../../services/apiServices/Clients";
import ModalProps from "./types";
import { useClientsContext } from "../../context/clients/ClientsContext";

const RegisterNewClientModal: React.FC<ModalProps> = ({
  onClose,
  open,
}) => {
  const { addClientToContext } = useClientsContext();
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!name.trim() || !document.trim() || !phone.trim() || !address.trim()) {
      toast.error('Todos os campos são obrigatórios.');
      return false;
    }

    if (document.length < 11) {
      toast.error('Documento inválido. Deve ter no mínimo 11 caracteres.');
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setName('');
    setDocument('');
    setPhone('');
    setAddress('');
  }

  const handleCreateClient = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await createClient({
        address,
        document,
        name,
        phone,
      });
      toast.success('Cliente criado com sucesso!');
      resetForm();
      addClientToContext(response);
      onClose();
    } catch {
      toast.error('Erro ao criar cliente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomModal open={open} onClose={onClose}>
      <aside
        className="flex flex-col gap-5 bg-white p-8 min-w-[400px] text-black rounded-xl"
        role="dialog"
        aria-labelledby="modal-title"
      >
        <div className="flex justify-center">
          <h1 className="font-black text-[32px]" id="modal-title">
            Cadastrar novo cliente
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
        <CustomButton
          onClick={handleCreateClient}
          disabled={loading}
          aria-label="Confirmar registro de cliente"
        >
          {loading ? 'Cadastrando...' : 'Confirmar'}
        </CustomButton>
      </aside>
    </CustomModal>
  );
};

export default RegisterNewClientModal;
