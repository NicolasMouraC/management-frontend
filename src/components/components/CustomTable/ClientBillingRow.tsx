import React from "react";
import { Dayjs } from "dayjs";
import { useBillingsContext } from "../../../context/billings/BillingsContext";
import CustomTableButtonsContainer from "../CustomTableButtonsContainer";
import { StyledTableCell, StyledTableRow } from "./styles";
import { ClientBillingRowProps } from "./types";
import { formatDate,isBillingDelayed, formatToBrlCurrent } from "../../../utils";

const ClientBillingRow: React.FC<ClientBillingRowProps> = ({ row }) => {
  const { selectBilling } = useBillingsContext();

  return (
    <StyledTableRow key={row.id}>
      <StyledTableCell component="th" scope="row">
        <div className="flex items-center gap-2">
          {row.description}
          {isBillingDelayed(row) ? (
            <div className="flex items-center justify-center text-[12px] py-1 px-3 rounded-lg bg-[#FFA5A5]">
              ATRASADO
            </div>
          ): null}
        </div>
      </StyledTableCell>
      <StyledTableCell align="center" component="th" scope="row">
        {formatToBrlCurrent(row.value)}
      </StyledTableCell>
      <StyledTableCell align="center" component="th" scope="row">
        {formatDate((row.dueDate as Dayjs)?.toString())}
      </StyledTableCell>
      <StyledTableCell sx={{ width: '100px' }} onClick={() => selectBilling(row)}>
        <CustomTableButtonsContainer
          tableType="billings"
          clientId={row.clientId}
          billingId={row.id}  
        />
      </StyledTableCell>
    </StyledTableRow>
  )
}

export default ClientBillingRow;