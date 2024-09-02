import CustomInput from "../components/CustomInput";
import { regexOnlyNumbers } from "../../utils";
import { ClientFormProps } from "./types";

const ClientForm: React.FC<ClientFormProps> = ({
  name,
  setName,
  document,
  setDocument,
  phone,
  setPhone,
  address,
  setAddress,
}) => {
  return (
    <div role="form">
      <CustomInput
        label="Nome"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        aria-label="Nome do cliente"
      />
      <CustomInput
        label="Documento"
        value={document}
        onChange={(e) => setDocument(e.currentTarget.value)} 
        aria-label="Docuemnto do cliente"
      />
      <CustomInput
        label="Telefone"
        value={phone}
        onChange={(e) => setPhone(regexOnlyNumbers(e.currentTarget.value))}
        aria-label="Telefone da cobrança"
      />
      <CustomInput
        label="Endereço"
        value={address}
        onChange={(e) => setAddress(e.currentTarget.value)}
        aria-label="Endereço do cliente"
      />
    </div>
  )
}

export default ClientForm;