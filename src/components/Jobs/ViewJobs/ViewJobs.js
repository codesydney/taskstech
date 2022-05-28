import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles'; 
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import DataTable from './DataTable';
import Box from '@material-ui/core/Box';

import SimpleBackdrop from '../../Loading/SimpleBackdrop';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../../actions/action';
import JobDiary from '../JobDiary/JobDiary';
import JobDetails from '../JobDetails/JobDetails';
import SearchBar from '../../../common/SearchBar';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component="span" variant="h6">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '60vw', //55rem
    },
    
}));

export default function ViewJobs({history}) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [type, setType] = useState('');
    const [params, setParams] = useState({});
    const { job } = useSelector((state) => state);

    const dispatch = useDispatch();

    const callback = ({ cellValues, componentType, path }) => {
        setType(componentType);
        setParams(cellValues)
        history.push(path);
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

    useEffect(() => {
        dispatch(getAllJobs(job?.loading));
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderDataTable = () => {
        if (type === 'diary') {
            return <JobDiary rows={params} />
        } else if (type === 'jobDetails') {
            return <JobDetails rows={params} />
        } else {
            return (
                <React.Fragment>
                    <header>
                        <p style={
                            { 
                                color: "#1a1a1a", 
                                fontFamily: "Comfortaa", 
                                fontSize: "32px" , 
                                textAlign: 'left',
                                marginTop: '1rem',
                                marginBottom: '1rem',
                            }
                        }>
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
                                style: {background:'#000', color:'#000'}
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
                        <DataTable
                            jobs={job}
                            title='All'
                            parentCallback={callback}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <DataTable
                            jobs={completedJobs}
                            title='Completed'
                            parentCallback={callback}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <DataTable
                            jobs={activeJobs}
                            title='Active'
                            parentCallback={callback}
                        />
                    </TabPanel>
                </React.Fragment>
            );
        }
    };

    return (
        <>
            <Container maxWidth="lg" className={classes.root}>
                {renderDataTable()}

                <SimpleBackdrop loading={job.loading} />
            </Container>
        </>
    );
}
