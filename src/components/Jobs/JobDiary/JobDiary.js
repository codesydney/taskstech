import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

  return (
    <Container maxWidth="lg" className={classes.root}>
      <div>


        <div id='add-section'>

          <div id='add-content'>
            <p style={{ color: "#1a1a1a", fontFamily: "Poppins", fontSize: "28px" }}>
              Job Diary
            </p>
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
