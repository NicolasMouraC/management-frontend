import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CustomTable from "../../components/components/CustomTable";
import { getClients } from "../../services/apiServices/Clients";
import RegisterNewClientModal from "../../components/Modals/RegisterNewClientModal";
import { useClientsContext } from "../../context/clients/ClientsContext";

const columns = [
  'Nome',
  'Pagos',
  'Abertos',
  'Atrasados',
  ''
];

const ClientsTableView = () => {
  const { clients, addClientsToContext } = useClientsContext();
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleGetClients = async () => {
    try {
      const clients = await getClients(page, rowsPerPage);

      addClientsToContext(clients);
    } catch {
      toast.error("Erro de conexão.");
      addClientsToContext([]);
    }
  }

  useEffect(() => {
    handleGetClients()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage])

  return (
    <main className="bg-white sm:px-[40px] py-8 min-w-[400px] w-[100%] max-w-[1600px] text-black rounded-xl">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-5 my-[20px]">
        <div className="flex justify-center">
          <h1 className="text-[32px] font-bold">
            Clientes
          </h1>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setOpenModal(true)}
            className="text-[12px] w-[200px] h-[48px] py-1 px-3 rounded-lg bg-[#000000] text-white"
          >
            Cadastrar
          </button>
        </div>
      </div>
      <CustomTable
        columns={columns}
        data={clients}
        tableType="clients"
        page={page}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
      <RegisterNewClientModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </main>
  )
}

export default ClientsTableView;