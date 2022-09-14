import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Container from '@material-ui/core/Container';
//import JobDiaryCards from './JobDiaryCards';
import JobDiaryAccordions from './JobDiaryAccordions';
import FormDialog from '../../../common/FormDialog';
import './jobdiary.css';

const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: {
    marginTop: '5rem',
  },

}));

export default function JobDiary({ rows }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [reload, setReload] = React.useState(false);

  const handleReload = (arg) => {
    setReload(arg);
  };

  const handleClickOpenForm = () => {
    setOpen(true);
  };

  const handleCloseForm = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        {
          /* 
          <JobDiaryCards 
            reload={reload}
            handleReload={handleReload}
            diary={rows}
            handleClickOpenForm={handleClickOpenForm}
          />
          */
        }
        {
          /* */
          <JobDiaryAccordions
          diary={rows}
          reload={reload}
          handleReload={handleReload}
          handleClickOpenForm={handleClickOpenForm}
        />
          
        }
        {
          open === true
            ? <FormDialog
              open={open}
              jobId={rows.rows.id}/* displays empty id */
              handleClose={handleCloseForm}
              handleReload={handleReload}
            />
            : null
        }
      </Container>
    </ThemeProvider>
  );
}
