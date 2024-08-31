import React from "react";
import CustomTableButtonsContainer from "../CustomTableButtonsContainer";
import TableBillingCount from "../TableBillingCount";
import { useClientsContext } from "../../../context/clients/ClientsContext";
import { useNavigate } from "react-router-dom";
import { StyledTableCell, StyledTableRow } from "./styles";
import { ClientRowProps } from "./types";

const ClientRow: React.FC<ClientRowProps> = ({ row }) => {
  const navigate = useNavigate();
  const { selectClient } = useClientsContext();

  const redirectToClientBillingsPage = () => {
    navigate(`/clients/${row.id}`);
  }

  return (
    <StyledTableRow key={row.id}>
      <StyledTableCell component="th" scope="row">
        {row.name}
      </StyledTableCell>
      <StyledTableCell align="center">
        <TableBillingCount backgroundColor="#AEFFB1">
          {row.paidBillingsCount || 0}
        </TableBillingCount>
      </StyledTableCell>
      <StyledTableCell align="center">
        <TableBillingCount backgroundColor="#90AFDC">
          {row.unpaidBillingsCount || 0}
        </TableBillingCount>
      </StyledTableCell>
      <StyledTableCell align="center">
        <TableBillingCount backgroundColor="#FFA8A8">
          {row.lateBillingsCount || 0}
        </TableBillingCount>
      </StyledTableCell>
      <StyledTableCell sx={{ width: '100px' }} onClick={() => selectClient(row)}>
        <CustomTableButtonsContainer
          tableType="clients"
          clientId={row.id}
          additionalAction={redirectToClientBillingsPage}
          additionalActionText="Cobranças"
        />
      </StyledTableCell>
    </StyledTableRow>
  )
}

export default ClientRow;