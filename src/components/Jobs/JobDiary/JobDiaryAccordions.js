import React, { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import PhotoViewerDialog from '../../../common/PhotoViewerDialog';
import { makeStyles } from '@mui/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from '../../../actions/activityAction';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import PreviewIcon from '@mui/icons-material/Preview';
import Button from '@mui/material/Button';

///common/assets/images/blank-profile-picture.png
//import { Container } from '@mui/material';

const useStyles = makeStyles(() => ({
  root: { width: '60vw' },
  content: {
    marginBottom: '10%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-10px'
  },
}));

export default function JobDiaryAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');
  const matches = useMediaQuery('(max-width:400px)');
  const dispatch = useDispatch();
  const { activity } = useSelector(state => state);
  const { diary, handleReload, reload } = props; // parentCallback
  const [open, setOpen] = React.useState(false);
  const [actId, setActId] = React.useState(0);
  const [photos, setPhotos] = React.useState([]);
  const id = diary === undefined ? 0 : diary.rows.id;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClickOpen = (id,photos) => {
    console.log(`id: ${id}`)
    setActId(id);
    setPhotos(photos);
    setOpen(true);
  };

  useEffect(() => {
    dispatch(getActivities(true, id));

    if (reload) handleReload(false);

  }, [reload]);


  const activityDetails = activity.payload.map((act) => {
    //console.log(`act.id: ${act.id}`);
    //console.log(act.upload_photos);
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
              style={{ backgroundColor: "#000000", width: '50%' }}
              onClick={() => handleClickOpen(act.id, act.upload_photos)}
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
      <p
        className='title'
        style={{
          fontSize: matches === true
            ? '38px' : '48px'
        }}
      >
        Job Diary
      </p>
      {activityDetails}
      {/* 
        get the id of the selected accordion 
        set the activity id state with the id of the selected accordion
        pass the activity id state to the PhotoViewerDialog
      */}
      <PhotoViewerDialog 
        setOpen={setOpen} open={open} 
        actId={actId} 
        photo={photos} 
        //desc={act.description} 
      />
    </Container>
  );
}
//