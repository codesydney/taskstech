import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { addActivity } from '../actions/activityAction';

export default function FormDialog({ open, handleClose,handleReload, jobId = '' }) {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
   console.log({ description, image, jobId }); 
   const activity = { description, image, jobId };
   dispatch(addActivity(activity));
   handleReload(true);
   handleClose();
  };

  const handleOnChange = evt => {
    if (evt.target.files.length !== 0) {
      const file = evt.target.files[0];
      
      setImage(URL.createObjectURL(file));
      setPreview(URL.createObjectURL(file));
      console.log(file);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Upload Photo</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setDescription(e.target.value)}
          />
          <div id="img-upload">
            <div id='preview'>
              { preview !== '' ? <img src={`${preview}`} width='100vw' height='100vh'/> : null}
            </div>
            <div id='content'>
              <input
                type="file"
                id="fileInput"
                alt="Click to upload image"
                src="/assets/images"
                multiple
                onChange={handleOnChange}
              />
            </div>

          </div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Job Id"
            type="number"
            fullWidth
            variant="standard"
            value={jobId}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
