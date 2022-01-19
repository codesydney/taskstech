import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 2,
  pb: 2,
};

export default function AlertModal({ showModal }) {
  const [open, setOpen] = React.useState(showModal);
  /*
  const handleOpen = () => {
    setOpen(true);
  };
 */
  const handleClose = () => {
    setOpen(false);
  }; 

  return (
    <div>
      { /* <Button onClick={handleOpen}>Open Modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: '250' }}>
          <h2 id="parent-modal-title" style={{ textAlign: 'center' }}>Success</h2>
          <p id="parent-modal-description">
            The job has been created succesfully.
          </p>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
