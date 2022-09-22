import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Container from '@material-ui/core/Container';
//import JobDiaryCards from './JobDiaryCards';
import JobDiaryAccordions from './JobDiaryAccordions';
import JobDiaryDetails from './JobDiaryDetails';
import FormDialog from '../../../common/FormDialog';
import './jobdiary.css';

const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: { marginTop: '5rem', },
}));

export default function JobDiary(props) { 
  const classes = useStyles();
  const { rows } = props;
  const [openActivityForm, setOpenActivityForm] = React.useState(false);
  const [openActivityDetailsForm, setOpenActivityDetailsForm] = React.useState(false);
  const [createdDate, setCreatedDate] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [activityId, setActivityId] = React.useState('');
  const [lastUpdatedDate, setLastUpdatedDate] = React.useState('');
  const [lastUpdatedBy, setLastUpdatedBy] = React.useState('');
  const [reload, setReload] = React.useState(false);

  const handleReload = (arg) => {
    setReload(arg);
  };
  
  const handleClickOpenActivityDetailsForm = (
    id,activityDescription,creationDate, 
    dateLastUpdated, updatedBy
  ) => {
    setOpenActivityDetailsForm(true);
    setActivityId(id);
    setDescription(activityDescription);
    setCreatedDate(creationDate);
    setLastUpdatedDate(dateLastUpdated);
    setLastUpdatedBy(updatedBy);
  }

  const handleClickCloseActivityDetailsForm = () => setOpenActivityDetailsForm(false);
  const handleClickOpenCreateForm = () => setOpenActivityForm(true);
  const handleCloseForm = () => setOpenActivityForm(false);

  console.log(rows);
  
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        {
          /* 
          <JobDiaryCards 
            reload={reload}
            handleReload={handleReload}
            diary={rows}
            handleClickOpenCreateForm={handleClickOpenCreateForm}
          />
          */
        }
        {
          <JobDiaryAccordions
            diary={rows}
            reload={reload}
            handleReload={handleReload}
            handleClickOpenCreateForm={handleClickOpenCreateForm}
            handleClickOpenActivityDetailsForm={handleClickOpenActivityDetailsForm}
          />
        }
        {
          openActivityForm === true
            ? <FormDialog
              open={openActivityForm}
              jobId={rows.rows.id}
              handleClose={handleCloseForm}
              handleReload={handleReload}
            />
            : null
        }
        {
            openActivityDetailsForm === true
            ? <JobDiaryDetails
                activityId={activityId}
                description={description}
                createdDate={createdDate}
                lastUpdatedDate={lastUpdatedDate}
                lastUpdatedBy={lastUpdatedBy}
                open={openActivityDetailsForm}
                handleClose={handleClickCloseActivityDetailsForm}
            />
            : null
        }
      </Container>
    </ThemeProvider>
  );
}
