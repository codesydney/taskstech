import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import JobDiaryCards from './JobDiaryCards';
import FormDialog from '../../../common/FormDialog';
import './jobdiary.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto'
  },
  
}));

export default function JobDiary({ rows }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [reload, setReload] = React.useState(false);

  const handleReload = (arg) => {
    setReload(arg);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseForm = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root}> 
      <JobDiaryCards
        reload={reload}
        handleReload={handleReload}
        diary={rows}
        handleClickOpen={handleClickOpen}
      />
      {
        open === true
          ? <FormDialog
            open={open}
            jobId={rows?.id}
            handleClose={handleCloseForm}
            handleReload={handleReload}
          />
          : null
      }
    </Container>
  );
}
