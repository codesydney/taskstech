import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoViewerDialog from '../../../common/PhotoViewerDialog';
import { makeStyles } from '@mui/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from '../../../actions/activityAction';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import PreviewIcon from '@mui/icons-material/Preview';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

///common/assets/images/blank-profile-picture.png
//import { Container } from '@mui/material';

const useStyles = makeStyles(() => ({
  root: { width: '60vw' },
  iconColor: { color: 'black' },

  content: {
    marginBottom: '10%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-10px'
  },
  activityButtonMobile: {
    position: 'relative',
    top: '2rem',
    left: '1rem ',
    height: '35% !important',
    width: '35% !important',
    backgroundColor: 'white !important',
    borderRadius: '50px',
    "border-style": 'solid !important',
    "border-color": 'black !important',
    boxShadow: '0 6px #999 !important',
  },

}));


export default function JobDiaryAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');
  //const matches = useMediaQuery('(max-width:400px)');
  const dispatch = useDispatch();
  const { activity } = useSelector(state => state);
  const { 
    diary, handleReload, 
    reload, handleClickOpenCreateForm, 
    handleClickOpenActivityDetailsForm 
  } = props; 
  const [open, setOpen] = useState(false);
  const [actId, setActId] = useState(0);
  const [photos, setPhotos] = useState([]);
  
  const [description, setDescription] = useState('');
  const id = diary === undefined ? 0 : diary.rows.id;
  const matches = useMediaQuery('(max-width:400px)');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  const handleClickOpenAccordion = (id, photos, description) => {
    setActId(id);
    setPhotos(photos);
    setDescription(description)
    setOpen(true);
  };

  useEffect(() => {
    dispatch(getActivities(true, id));

    if (reload) handleReload(false);

  }, [reload]);


  const activityDetails = activity.payload.map((act) => {

    return (
      <Accordion
        key={act.id}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Container>
            <Typography sx={{ width: '44%', flexShrink: 0, marginLeft: '-1.5rem' }}>
              Description
            </Typography>
            <Typography
              id='content'
              sx={{ fontSize: 15, marginLeft: '-7rem' }}
              color="text.secondary" gutterBottom
            >
              {act.description}
            </Typography>
          </Container>
        </AccordionSummary>
        <AccordionDetails >
          <Container className={classes.content}>
            <Typography sx={{ width: '31%', flexShrink: 0, marginLeft: '-0.7rem' }}>
              Created on
            </Typography>
            <Typography sx={{ color: 'text.secondary', marginLeft: '-3.5rem' }}>
              {act.create_date}
            </Typography>
            <Typography id='stat' sx={{ width: '44%', flexShrink: 0, marginLeft: '-.90rem' }}>
              Last Updated
            </Typography>
            <Typography
              sx={{ fontSize: 15, marginLeft: '-5rem' }} color="text.secondary" gutterBottom>
              {act.update_date}
            </Typography>
            <Typography sx={{ width: '50%', flexShrink: 0, marginLeft: '-.90rem' }}>
              Last Updated By
            </Typography>
            <Typography sx={{ fontSize: 14, marginLeft: '-5rem' }} color="text.secondary" gutterBottom>
              {act.update_by}
            </Typography>
          </Container>
          <Container>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#000000", width: '25%', margin: '1% 3%' }}
              onClick={() => handleClickOpenActivityDetailsForm(act.description,act.create_date,act.update_date,act.update_by)} 
            >
              <EditIcon />
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#000000", width: '25%' }}
              onClick={() => handleClickOpenAccordion(act.id, act.upload_photos, act.description)}
            >
              <PreviewIcon />
            </Button>
          </Container>
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={0}>
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
            className={classes.activityButtonMobile}
            onMouseUp={handleClickOpenCreateForm}
          >
            <NoteAddIcon
             className={classes.iconColor} />
          </Button>
        </Grid>
      </Grid>

      {activityDetails}
      <PhotoViewerDialog
        setOpen={setOpen} 
        open={open}
        actId={actId}
        photo={photos}
        description={description}
      />
    </Container>
  );
}
