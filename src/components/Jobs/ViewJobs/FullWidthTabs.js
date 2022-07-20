import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@mui/material/Tab';


import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../../actions/action';

import DataTable from './DataTable';
import ControlledAccordions from './ControlledAccordions';
import SearchBar from '../../../common/SearchBar';
import SimpleBackdrop from '../../Loading/SimpleBackdrop';
import { TabPanel, a11yProps } from '../../../common/TabMenu/TabStyles';
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '60vw', //55rem
  },
}));


export const FullWidthTabs = ({ history, callback }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const { job } = useSelector((state) => state);
  const matches = useMediaQuery('(max-width:600px)');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs(job?.loading));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const completedJobs = {
    payload: job.payload.filter(job => {
      return job.job_status.name === 'Completed';
    })
  };

  const activeJobs = {
    payload: job.payload.filter(job => {
      return job.job_status.name === 'In progress';
    })
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <header>
        <p className='title'>
          Jobs
        </p>
        <SearchBar />
        <Button
          type='submit'
          fullWidth
          size="large"
          variant='contained'
          onClick={() => history.push("/create/job")}
          style={{
            marginTop: '1rem',
            marginBottom: '1rem',
            backgroundColor: '#000000'
          }}
        >
          New Job
        </Button>
      </header>

      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: { background: '#000', color: '#000' }
          }}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Completed" {...a11yProps(1)} />
          <Tab label="Active" {...a11yProps(2)} />
        </Tabs>
      </AppBar>


      <TabPanel value={value} index={0} dir={theme.direction} >
        {
          matches === false
            ? <DataTable
              jobs={job}
              title='All'
              parentCallback={callback}
            />
            : <ControlledAccordions 
              jobs={job}
              parentCallback={callback}
            />
        }
      </TabPanel>

      <TabPanel value={value} index={1} dir={theme.direction}>
        {
          matches === false
            ? <DataTable
              jobs={completedJobs}
              title='All'
              parentCallback={callback}
            />
            : <ControlledAccordions
              jobs={completedJobs}
              parentCallback={callback}
            />
        }
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        {
          matches === false
            ? <DataTable
                jobs={activeJobs}
                title='All'
                parentCallback={callback}
              />
            : <ControlledAccordions
                jobs={activeJobs}
                parentCallback={callback}
              />
        }
      </TabPanel>

      <SimpleBackdrop loading={job?.loading} />
    </Container>
  );
}
