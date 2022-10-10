import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@material-ui/core/Container';
import JobDiaryAccordions from './JobDiaryAccordions';
import JobDiaryDetails from './JobDiaryDetails';
import FormDialog from '../../../common/FormDialog';
import './jobdiary.css';

const theme = createTheme();

export default function JobDiary(props) { 
  const { rows, history } = props;

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
  
  return (
    <ThemeProvider theme={theme}>
      <Container>
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
              jobId={history?.location.state.rows.rows.id}
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
