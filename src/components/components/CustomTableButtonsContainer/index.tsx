import { useState } from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import EditBillingModal from '../../Modals/EditBillingModal';
import EditClientModal from '../../Modals/EditClientModal';
import DeleteRowModal from '../../Modals/DeleteRowModal';
import CustomTableButtonsContainerProps from './types';

const CustomTableButtonsContainer: React.FC<CustomTableButtonsContainerProps> = ({
  additionalAction,
  additionalActionText,
  clientId,
  billingId,
  tableType,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditBillingModal, setOpenEditBillingModal] = useState(false);
  const [openEditClientModal, setOpenEditClientModal] = useState(false);

  return (
    <>
      <div className="flex gap-2">
        <button
          className="p-1 rounded-lg bg-[#0F11D5] text-white"
          onClick={() => (
            tableType === 'billings' ? setOpenEditBillingModal(true) : setOpenEditClientModal(true)
          )}
        >
          <EditNoteIcon />
        </button>
        <button
          className="p-1 rounded-lg bg-[#D91818] text-white"
          onClick={() => setOpenDeleteModal(true)}
        >
          <DeleteIcon />
        </button>
        {additionalAction ? (
          <button
            className="text-[12px] py-1 px-3 rounded-lg bg-[#000000] text-white"
            onClick={additionalAction}
          >
            {additionalActionText}
          </button>
        ) : null}
      </div>
      {tableType === 'billings' ? (
        <EditBillingModal
          open={openEditBillingModal}
          onClose={() => setOpenEditBillingModal(false)}
          billingId={billingId as number}
          clientId={clientId}
        />
      ) : (
        <EditClientModal
          open={openEditClientModal}
          onClose={() => setOpenEditClientModal(false)}
          clientId={clientId}
        />
      )}
      <DeleteRowModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        billingId={billingId as number}
        clientId={clientId}
        rowType={tableType}
      />
    </>
  )
}

export default CustomTableButtonsContainer;