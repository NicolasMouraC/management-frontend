import { useNavigate } from "react-router-dom";
import { useClientsContext } from "../../context/clients/ClientsContext";
import { useBillingsContext } from "../../context/billings/BillingsContext";
import { removeToken } from "../../utils";

const Header = () => {
  const { cleanClientsContext } = useClientsContext();
  const { cleanBillingsContext } = useBillingsContext();
  const navigate =  useNavigate();

  const handleLogOut = () => {
    removeToken();
    cleanBillingsContext();
    cleanClientsContext();
    navigate('/auth')
  }

  return (
    <header className="flex justify-between w-full p-6 top-0 bg-white">
      <h2 className="text-black font-bold text-[36px]">
        Gerenciamento
      </h2>
      <button
        className="text-[12px] w-[200px] h-[48px] py-1 px-3 rounded-lg bg-[#000000] text-white"
        onClick={() => handleLogOut()}
        aria-label="Sair da conta"
      >
        Sair
      </button>
    </header>
  )
}

export default Header;