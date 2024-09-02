import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, TablePagination } from "@mui/material";
import ClientRow from "./ClientRow";
import ClientBillingRow from "./ClientBillingRow";
import NoItems from "../NoItems";
import LoadingItems from "../LoadingItems";
import { StyledTableCell, StyledTableRow } from "./styles";
import Client from "../../../types/models/Client";
import Billing from "../../../types/models/Billing";
import CustomTableProps from "./types";

const CustomTable: React.FC<CustomTableProps> = ({
  data,
  columns,
  tableType,
  page,
  rowsPerPage,
  setPage,
  setRowsPerPage,
  isLoading,
}) => {
  return (
    <Paper>
      <TableContainer>
        <Table
          sx={{ width: '100%', maxWidth: 1600 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <StyledTableCell
                  align={index === 0 ? "left" : "center"}
                  key={index}
                  aria-label={`Coluna ${column}`}
                >
                  {column}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && (
              <StyledTableRow>
                <StyledTableCell colSpan={columns.length}>
                  <LoadingItems aria-label="Carregando" />
                </StyledTableCell>
              </StyledTableRow>
            )}
            {data.length ? data.map((row, index) => (
              tableType === "clients" ? ( 
                <ClientRow row={row as Client} key={index} />
              ) : (
                <ClientBillingRow row={row as Billing} key={index} />
              )
            )) : (
              <StyledTableRow>
                <StyledTableCell colSpan={columns.length}>
                  <NoItems aria-label="Nenhum item disponível" />
                </StyledTableCell>
              </StyledTableRow>
            )
          }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, v) => setPage(v)}
        // @ts-expect-error comment
        onRowsPerPageChange={(_, v) => setRowsPerPage(v.props.value)}
        labelRowsPerPage="Linhas por página"
        aria-label="Paginação da tabela"
      />
    </Paper>
  );
};

export default CustomTable;