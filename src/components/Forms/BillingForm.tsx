import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import CustomInput from "../components/CustomInput";
import { regexOnlyNumbers } from "../../utils";
import { BillingFormProps } from "./types";

const BillingForm: React.FC<BillingFormProps> = ({
  value,
  setValue,
  dueDate,
  setDueDate,
  isPayed,
  setIsPayed,
  description,
  setDescription,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <CustomInput
        label="Descrição"
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
      />
      <div className="flex gap-5 items-center">
        <CustomInput
          label="Valor"
          value={value}
          onChange={(e) => setValue(regexOnlyNumbers(e.currentTarget.value))}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Data de Vencimento"
            value={dueDate}
            onChange={(newValue) => setDueDate(newValue)}
            // @ts-expect-error comment
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <FormControlLabel
          value={isPayed}
          control={<Checkbox checked={isPayed} onClick={() => setIsPayed(!isPayed)} />}
          label="Pago?"
          labelPlacement="top"
        />
      </div>
    </div>
  )
}

export default BillingForm;