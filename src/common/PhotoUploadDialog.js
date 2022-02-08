import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch } from 'react-redux';
import { addPhoto } from '../actions/photosActions';

export default function PhotoUploadForm({
  open, actId,
  handleClose, 
  handleReload, 
  setHasUploaded,
}) {
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const matches = useMediaQuery('(max-width:400px)');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (image !== '') {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('activity_id', actId);

      dispatch(addPhoto(formData));
      handleReload(true);
      handleClear();
      setHasUploaded(true);
    } else console.log('File is empty')
  };

  const handleClear = () => {
    setImage('');
    setPreview('');
    handleClose();
  };

  const handleOnChange = evt => {
    if (evt.target.files.length !== 0) {
      const file = evt.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };


  return (
    <>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle style={{ textAlign: 'center' }}>Upload New Photo</DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            id="activity_id"
            name='activity_id'
            label="Activity Id"
            type="text"
            value={actId}
            fullWidth
            variant="standard"
            disabled
          />
          <div id="img-upload">
            <div
              id='preview'
              style={{
                width: matches === true
                  ? '70vw' : '30vw',
                height: matches === true
                  ? '35vh' : '50vh'
              }}>
              {
                preview !== ''
                  ? <img src={`${preview}`} width='100%' height='90%' />
                  : <UploadFileIcon id='icon' alt='Click to Upload Image' />
              }
            </div>
            <div id='content'>
              <input
                type="file"
                id="file"
                name="file"
                alt="Click to upload image"
                src="/assets/images"
                onChange={handleOnChange}
              />
            </div>
          </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClear}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
