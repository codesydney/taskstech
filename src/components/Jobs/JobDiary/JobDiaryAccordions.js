import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from 'react-redux';
import PhotoViewerDialog from '../../../common/PhotoViewerDialog';
import { getActivities } from '../../../actions/activityAction';
import "./jobdiary.css";

export default function JobDiaryAccordions(props) {
  const [expanded, setExpanded] = React.useState('panel1');
  const dispatch = useDispatch();
  const { activity } = useSelector(state => state);
  const {
    diary, handleReload,
    reload, handleClickOpenCreateForm,
    handleClickOpenActivityDetailsForm
  } = props;
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);
  const [actId, setActId] = useState(0);
  const [photos, setPhotos] = useState([]);

  const [description, setDescription] = useState('');
  const id = diary === undefined ? 0 : diary.rows.id;
  const matches = useMediaQuery('(max-width:400px)');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClickOpenPhotoViewerDialog = (id, photos, description) => {
    setActId(id);
    setPhotos(photos);
    setDescription(description)
    setOpenPhotoViewer(true);
  };

  useEffect(() => {
    dispatch(getActivities(true, id));

    if (reload) handleReload(false);

  }, [reload]);


  const convertUTCTimeToLocalTime = (dateString) => {
    let utcDate = new Date(dateString).toISOString();
    const date = new Date(utcDate);
    return date.toLocaleString();
  };


  const activityDetails = activity.payload.map((act) => {

    return (
      <Accordion
        key={act.id}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className="accordionMobile"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ width: '90%' }}
        >
            <Typography sx={{ fontSize: '1rem',width: '44%', flexShrink: 0, fontWeight: 'bold' }}>
              Description
            </Typography>
            <Typography
              id='content'
              sx={{ fontSize: '1rem', textAlign: 'left' }}
              color="text.secondary" gutterBottom
            >
              {act.description}
            </Typography>
        </AccordionSummary>
        <AccordionDetails >
            <Typography sx={{ fontSize: '1rem', width: '31%', flexShrink: 0, fontWeight: 'bold' }}>
              Created on
            </Typography>
            <Typography sx={{ fontSize: '1rem', color: 'text.secondary', textAlign: 'left' }}>
              {convertUTCTimeToLocalTime(act.update_date)}
            </Typography>
            <Typography id='stat' sx={{ fontSize: '1rem', width: '43%', flexShrink: 0, fontWeight: 'bold' }}>
              Last Updated
            </Typography>
            <Typography
              sx={{ fontSize: '1rem', textAlign: 'left' }} color="text.secondary" gutterBottom>
              {convertUTCTimeToLocalTime(act.update_date)}
            </Typography>
            <Typography sx={{ width: '50%', flexShrink: 0, fontWeight: 'bold' }}>
              Last Updated By
            </Typography>
            <Typography sx={{ fontSize: '1rem', textAlign: 'left' }} color="text.secondary" gutterBottom>
              {act.update_by}
            </Typography>
          
          <Container>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#000000",
                width: '25%',
                margin: '1% 3%',
                color: "#fff",
                padding: '8px 22px',
                borderRadius: '4px'
              }}
              onClick={() => handleClickOpenActivityDetailsForm(act.id, act.description, act.create_date, act.update_date, act.update_by, id)}
            >
              <EditIcon />
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ 
                backgroundColor: "#000000", 
                width: '25%',
                color: "#fff",
                padding: '8px 22px',
                borderRadius: '4px'
              }}
              
              onClick={() => handleClickOpenPhotoViewerDialog(act.id, act.upload_photos, act.description)}
            >
              <CameraAltIcon />
            </Button>
          </Container>
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <Container maxWidth="lg" className='root'>
      <Grid container spacing={0} className='accordion'>
        <Grid item xs={8}>
          <p
            className='title'
            style={{
              fontSize: matches === true
                ? '38px' : '48px',
              height: '100% !important',
              width: '80% !important',
              textAlign: 'right'
            }}
          >
            Job Diary
          </p>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            className='activityButtonMobile'
            onMouseUp={handleClickOpenCreateForm}
          >
            <NoteAddIcon className='iconColor' sx={{ color: 'black !important' }} />
          </Button>
        </Grid>
        <Grid item xs={12}>
          {activityDetails}
        </Grid>
        <Grid item xs={4}>
          <PhotoViewerDialog
            setOpenPhotoViewer={setOpenPhotoViewer}
            openPhotoViewer={openPhotoViewer}
            actId={actId}
            uploadedPhotos={photos}
            description={description}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
