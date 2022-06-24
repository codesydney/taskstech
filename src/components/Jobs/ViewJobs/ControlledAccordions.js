import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import InfoIcon from '@mui/icons-material/Info';

import Button from '@mui/material/Button';
import { Container } from '@mui/material';


export default function ControlledAccordions(props) {
  const [expanded, setExpanded] = React.useState('panel1');
  const { jobs, parentCallback } = props;

  const rows = jobs.payload;


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDiaryClick = (event, rows) => {
    const params = {
      rows,
      componentType: 'diary',
    };

    parentCallback(params);
  };

  const handleJobDetailsClick = (event, row) => {
    const params = {
      componentType: 'jobDetails',
      detailsPath: `/view/jobs/details/${row.id}`,
      rows: { row }
    };
    
    parentCallback(params);

  };


  const listRows = () => rows.map(row => {
    return (
      <Accordion
        key={row.id}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Name
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>{/* */}
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ minWidth: 275 }}>
            <Container style={{ display: 'flex', flexDirection: 'column' }}>
              <div className='wrapper'  >
                <div style={{ display: 'flex' }}>
                  <Typography id='desc' sx={{ width: '33%', flexShrink: 0 }}>
                    Summary
                  </Typography>
                  <Typography id='content' sx={{ fontSize: 14, padding: '1%' }} color="text.secondary" gutterBottom>
                    {row.description}
                  </Typography>
                </div>
                <div style={{ display: 'flex' }}>
                  <Typography id='stat' sx={{ width: '33%', flexShrink: 0, marginLeft: '-.50rem' }}>
                    Status
                  </Typography>
                  <Typography id='content' sx={{ fontSize: 14, padding: '1%' }} color="text.secondary" gutterBottom>
                    {row.job_status['name']}
                  </Typography>
                </div>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#000000" }}
                  onClick={(event) => {
                    handleDiaryClick(event, row);
                  }}
                >
                  <MenuBookIcon />
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#000000", margin: '2%' }}
                  onClick={(event) => {
                    handleJobDetailsClick(event, row);
                  }}
                >
                  <InfoIcon />
                </Button>
              </div>
            </Container>
          </Box>
        </AccordionDetails>
      </Accordion>
    );
  })


  return (
    <div style={{ marginBottom: '25%' }}>
      {listRows()}
    </div>
  );
}
