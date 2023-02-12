import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';


export default function ControlledAccordions(props) {
  const [expanded, setExpanded] = React.useState('panel1');
  const { jobs, parentCallback } = props; 

  const rows = jobs.payload;


  const handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

  const handleDiaryClick = (event, rows) => {
    const params = {
      rows,
      jobDetailsPath: `/view/jobs/diary/details/${rows.id}`,
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
          sx={{ width: '19rem' }}
        >
          <Typography sx={{ width: '33%', flexShrink: 0, padding: '0 4rem 0 0', fontWeight: 'bold' }}>
            Name
          </Typography>
          <Typography sx={{ color: 'text.secondary', padding: '0 0.5rem 0 0' }}>{row.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ minWidth: 275 }}>
            <Container style={{ display: 'flex', flexDirection: 'column' }}>
              <div className='wrapper' >
                <div style={{ display: 'flex' }}>
                  <Typography id='desc' sx={{ width: '33%', flexShrink: 0, marginLeft: '-.95rem', fontWeight: 'bold' }}>
                    Summary
                  </Typography>
                  <Typography id='content' sx={{ fontSize: '1rem', padding: '0 1%' }} color="text.secondary" gutterBottom>
                    {row.description}
                  </Typography>
                </div>
                <div style={{ display: 'flex' }}>
                  <Typography id='stat' sx={{ width: '33%', flexShrink: 0, marginLeft: '-.95rem', fontWeight: 'bold' }}>
                    Status
                  </Typography>
                  <Typography id='content' sx={{ fontSize: '1rem', padding: '1%' }} color="text.secondary" gutterBottom>
                    {row.job_status['name']}
                  </Typography>
                </div>
              </div>
              <div>
              <Button
                  variant="contained"
                  color="primary"
                  style={{ 
                    backgroundColor: "#000000",
                    color: "#fff",
                    padding: '8px 22px',
                    margin: '2%',
                    borderRadius: '4px' 
                  }}
                  onClick={(event) => {
                    handleJobDetailsClick(event, row);
                  }}
                >
                  <EditIcon />
                </Button>
                
                <Button
                  variant="contained"
                  color="primary"
                  style={{ 
                    backgroundColor: "#000000",
                    color: "#fff",
                    padding: '8px 22px',
                    borderRadius: '4px'
                  }}
                  onClick={(event) => {
                    handleDiaryClick(event, row);
                  }}
                >
                  <MenuBookIcon />
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
