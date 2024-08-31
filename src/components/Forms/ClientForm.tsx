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
    <>
      <CustomInput
        label="Nome"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <CustomInput
        label="Documento"
        value={document}
        onChange={(e) => setDocument(e.currentTarget.value)} 
      />
      <CustomInput
        label="Telefone"
        value={phone}
        onChange={(e) => setPhone(regexOnlyNumbers(e.currentTarget.value))}
      />
      <CustomInput
        label="Endereço"
        value={address}
        onChange={(e) => setAddress(e.currentTarget.value)}
      />
    </>
  )
}

export default ClientForm;