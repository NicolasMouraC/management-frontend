import { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CustomModalProps from './types';

const CustomModal: React.FC<CustomModalProps> = ({ children, open, onClose }) => {
  useEffect(() => {
    if (open) {
      const firstFocusableElement = document.querySelector('.default-container-wrapper') as HTMLElement;
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      aria-labelledby="modal"
      aria-describedby="modal"
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '75%',
            backgroundColor: 'white',
            boxShadow: 24,
            p: 4,
            maxHeight: '80%',
            overflow: 'auto',
            padding: '5px',
            outline: 'none',
          }}
          tabIndex={-1}
        >
          <div className="default-container-wrapper" tabIndex={-1}>
            <div className="default-container flex flex-col gap-5">
              { children }
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}

export default CustomModal;