import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useClientsContext } from "../../context/clients/ClientsContext";
import { getBillings } from "../../services/apiServices/Clients";
import CustomTable from "../../components/components/CustomTable";
import CreateNewClientBillingModal from "../../components/Modals/CreateNewClientBillingModal";
import { useBillingsContext } from "../../context/billings/BillingsContext";

const columns = [
  'Descrição',
  'Valor',
  'Vencimento',
  ''
];

const ClientBillings = () => {
  const { billings, addBillingsToContext } = useBillingsContext();
  const navigate = useNavigate();
  const { currentSelectedClient } = useClientsContext();
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleGetBillings = async () => {
    try {
      if (!currentSelectedClient?.id) {
        navigate('/')
        return;
      }

      const billings = await getBillings(currentSelectedClient?.id as number, page, rowsPerPage);

      addBillingsToContext(billings);
    } catch {
      toast.error("Erro de conexão.");
      addBillingsToContext([]);
    }
  }

  const handleRedirectToClientsPage = () => {
    navigate('/');
  }

  useEffect(() => {
    handleGetBillings()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage])

  return (
    <main className="bg-white p-8 min-w-[400px] w-full max-w-[1600px] text-black rounded-xl">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-5 my-[20px]">
        <div className="flex justify-center">
          <h1 className="text-[32px]">
            Cobranças / <span className="font-bold">Cliente Teste</span>
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <div className="flex gap-5 justify-center">
            <button
              className="text-[12px] w-[200px] h-[48px] py-1 px-3 rounded-lg bg-[#000000] text-white"
              onClick={() => setOpenModal(true)}
            >
              Cadastrar
            </button>
          </div>
          <div className="flex gap-5 justify-center">
            <button
              className="text-[12px] w-[200px] h-[48px] py-1 px-3 rounded-lg bg-[#D91818] text-white"
              onClick={handleRedirectToClientsPage}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
      <CustomTable
        tableType="billings"
        columns={columns}
        data={billings}
        page={page}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
       />
      <CreateNewClientBillingModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </main>
  )
}

export default ClientBillings;