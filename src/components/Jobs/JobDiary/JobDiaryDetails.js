import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function JobDiaryDetails({ open, handleClose,description,lastUpdatedDate, lastUpdatedBy }) { // pass diary as prop
  
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Job Diary Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            value={description}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            // display date. Update this date in the action creator
            label="Last Updated Date"
            value={lastUpdatedDate}
            fullWidth
            disabled
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Updated By"
            value={lastUpdatedBy}
            fullWidth
            disabled
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button style={{ color: 'black' }} onClick={handleClose}>Cancel</Button>
          <Button style={{ color: 'black' }} onClick={handleClose}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
