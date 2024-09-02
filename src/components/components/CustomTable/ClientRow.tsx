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
  };

  return (
    <StyledTableRow key={row.id}>
      <StyledTableCell component="th" scope="row" aria-label={`Cliente: ${row.name}`}>
        {row.name}
      </StyledTableCell>
      <StyledTableCell align="center" aria-label={`Cobranças pagas: ${row.paidBillingsCount || 0}`}>
        <TableBillingCount backgroundColor="#AEFFB1">
          {row.paidBillingsCount || 0}
        </TableBillingCount>
      </StyledTableCell>
      <StyledTableCell align="center" aria-label={`Cobranças não pagas: ${row.unpaidBillingsCount || 0}`}>
        <TableBillingCount backgroundColor="#90AFDC">
          {row.unpaidBillingsCount || 0}
        </TableBillingCount>
      </StyledTableCell>
      <StyledTableCell align="center" aria-label={`Cobranças atrasadas: ${row.lateBillingsCount || 0}`}>
        <TableBillingCount backgroundColor="#FFA8A8">
          {row.lateBillingsCount || 0}
        </TableBillingCount>
      </StyledTableCell>
      <StyledTableCell
        sx={{ width: '100px' }}
        onClick={() => selectClient(row)}
        aria-label={`Ações para o cliente ${row.name}`}
      >
        <CustomTableButtonsContainer
          tableType="clients"
          clientId={row.id}
          additionalAction={redirectToClientBillingsPage}
          additionalActionText="Cobranças"
          aria-label={`Ações para o cliente ${row.name}, incluindo navegação para cobranças`}
        />
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ClientRow;