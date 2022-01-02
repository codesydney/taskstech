import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import NoteAddIcon from '@mui/icons-material/NoteAdd';

import JobDiaryDataTable from '../JobDiary/JobDiaryDataTable';
import FormDialog from '../../../common/FormDialog';
import './jobdiary.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 600,
  },
  diary: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",

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

  const handleClose = () => {
    setOpen(false);
  };

  // remove 
  //const addDiary = React.createElement(Button, {variant:"outlined", onClick: handleClickOpen}, AddCircleOutlineIcon, );
  // remove 
  return (
    <Container maxWidth="lg" className={classes.root}>
      <div >
        <Typography component="h1" variant="h5" className={classes.diary}>
          Job Diary
        </Typography>

        <div id='add-section'>
          <div id='add-content'>
            <Button variant="outlined" onClick={handleClickOpen}>
              <NoteAddIcon />
            </Button>
          </div>
        </div>

        <JobDiaryDataTable reload={reload} handleReload={handleReload} diary={rows} />
      </div>
      {open === true ? <FormDialog open={open} jobId={rows?.id} handleClose={handleClose} handleReload={handleReload} /> : null}
    </Container>
  );
}
