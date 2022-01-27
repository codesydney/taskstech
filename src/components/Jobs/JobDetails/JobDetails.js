import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AlertModal from '../../../common/AlertModal';

import Lookup from '../../../common/Lookup';
import { useDispatch, useSelector } from "react-redux";
import SimpleBackdrop from "../../Loading/SimpleBackdrop";
import { getStatus } from "../../../actions/action";
import { getCustomers } from "../../../actions/customerActions";
import { updateJob } from '../../../actions/action';
import { useState } from "react";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const JobDetails = ({ rows }) => {
    const jobs = rows === undefined ? {} : rows;
    const jobId = jobs.id;
    const [jobName, setJobName] = useState(jobs.row.name);
    const [description, setDescription] = useState(jobs.row.description);

    const [jobNameIsValid, setJobNameIsValid] = useState(false);
    const [descriptionIsValid, setDescriptionIsValid] = useState(false);
    const [customerNameIsValid, setCustomerNameIsValid] = useState(false);

    const [errors, setErrors] = useState({
        jobName: { helperText: '', fieldError: false },
        description: { helperText: '', fieldError: false },
        tradesperson_id: { helperText: '', fieldError: false },
        customer_id: { helperText: '', fieldError: false },
    });

    const [customerName, setCustomerName] = useState(`${jobs.row.customer.first_name} ${jobs.row.customer.last_name}`);
    const [customerId, setCustomerId] = useState(jobs.row.customer.id);
    const [jobStatus, setJobStatus] = useState(jobs.row.job_status.name);
    const [jobStatusId, setJobStatusId] = useState(jobs.row.job_status.id);
    const status = useSelector((state) => state.status.job);
    const { customers, job } = useSelector((state) => state);
    const indicator = useSelector((state) => state.job.loading);
    const matches = useMediaQuery('(max-width:600px)');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStatus());
        dispatch(getCustomers());
    }, [indicator]);

    let jobObject = {
        id: jobId,
        name: jobName,
        description: description,
        job_status_id: jobStatusId,
        customer_id: customerId
    }

    const handleUserInput = event => {
        const { name, value } = event.target;
        let { helperText, fieldError } = fieldValidator(value, name);

        if (name === "jobName") {
            setJobName(value);
            switch (fieldError) {
                case false:
                    setJobNameIsValid(true);
                    setErrors({ [name]: { helperText, fieldError } });
                    break;
                case true:
                    setJobNameIsValid(false);
                    setErrors({ [name]: { helperText, fieldError } });
                    break;
                default:
                    break;
            }
        }
        if (name === "description") {
            setDescription(value);

            switch (fieldError) {
                case false:
                    setDescriptionIsValid(true);
                    setErrors({ [name]: { helperText, fieldError } });
                    break;
                case true:
                    setDescriptionIsValid(false);
                    setErrors({ [name]: { helperText, fieldError } });
                    break;
                default:
                    break;
            }
        }


    };


    const fieldValidator = (field, fieldName) => {
        const fieldLimitReach = fieldName === 'jobName' ? /^.{29,30}$/ : /^.{99,100}$/;

        if (field === '') {
            return {
                helperText: 'field is empty.',
                fieldError: true
            }
        }
        else if (field.length > 0 && fieldLimitReach.test(field) === false) {

            return {
                helperText: '',
                fieldError: false
            }
        }
        else if (fieldLimitReach.test(field) === true) {
            return {
                helperText: 'Maximum character limit reached.',
                fieldError: true
            }
        }
    };

    const handleDropdownChange = (event, params) => {
        const { name, selectedIndex, childNodes, value } = event.target;
        let { helperText, fieldError } = fieldValidator(value, name);//

        switch (name) {
            case 'job_status_id':
                {
                    const index = selectedIndex;
                    const el = childNodes[index]
                    const option = el.getAttribute('id');

                    setJobStatus(value)
                    setJobStatusId(Number(option));
                    break;
                }
            case 'customer_id':
                {
                    const { user_id } = params.props;

                    if (user_id !== 0) setCustomerId(user_id);

                    if (fieldError === false) {
                        setCustomerName(value);
                        setCustomerNameIsValid(true);
                        setErrors({ [name]: { helperText, fieldError } });
                    }
                    if (fieldError === true) {
                        setCustomerNameIsValid(false);
                        setErrors({ [name]: { helperText, fieldError } });
                        console.log(errors)
                    }

                    break;
                }
            default:
                console.log('error')
                break;
        }
    };

    const isValid = () => {
        if (jobNameIsValid &&
            descriptionIsValid &&
            customerNameIsValid) {
            return true;
        }
        else {
            return false;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(updateJob(jobObject));
        resetFields();
    };

    const resetFields = () => {
        jobObject = {
            customer_id: '',
            description: '',
            jobName: '',
            job_status_id: 1,
            tradesperson_id: ''
        };
        setJobName('');
        setDescription('');
        setJobStatus('Not yet started');
        setJobStatusId(1);
    }

    return (
        <Box
            sx={{
                '& .MuiTextField-root': {
                    m: 1,
                    width: matches === false
                        ? '22vw'
                        : '70vw !important'
                },
            }}
        >

            <Paper
                elevation={3}
                component="form"
                sx={{
                    width: matches === false ? '40vw' : '80vw',
                    margin: '0 auto',
                    padding: '10px'
                }}
                onSubmit={handleSubmit}
            >
                <Item>
                    <p style={{ color: "#1a1a1a", fontFamily: "Poppins", fontSize: "28px" }}>
                        Job Details
                    </p>
                </Item>
                <Item>
                    <div>
                        <TextField
                            value={jobId}
                            name='jobId'
                            disabled
                            id="outlined-error-helper-text"
                            label="Job ID"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            error={errors.jobName === undefined ? false : errors.jobName.fieldError}
                            helperText={errors.jobName === undefined ? false : errors.jobName.helperText}
                            value={jobName}
                            name='jobName'
                            required
                            id="outlined-error-helper-text"
                            label="Job Name"
                            variant="outlined"
                            onBlur={handleUserInput}
                            onChange={handleUserInput}
                        />
                    </div>
                    <div>
                        <TextField
                            error={errors.description === undefined ? '' : errors.description.fieldError}
                            helperText={errors.description === undefined ? '' : errors.description.helperText}
                            value={description}
                            name='description'
                            id="outlined-error-helper-text"
                            label="Description"
                            variant="outlined"
                            onBlur={handleUserInput}
                            onChange={handleUserInput}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-select-currency-native"
                            select
                            name='job_status_id'
                            value={jobStatus}
                            onChange={handleDropdownChange}
                            SelectProps={{
                                native: true,
                            }}
                            variant="outlined"
                        >
                            {status.map((option, key) => (
                                <option key={key} value={option.name} id={option.id}>
                                    {option.name}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <Lookup
                            data={customers.payload}
                            customerName={customerName}
                            handleDropdownChange={handleDropdownChange}
                            errors={errors}
                        />
                    </div>

                </Item>
                <Item>
                    <div>
                        <Button
                            disabled={!isValid()}
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Update
                        </Button>
                        {
                            job.showModal === true
                                ? <AlertModal showModal={job.showModal} text='updated' />
                                : null
                        }

                    </div>
                </Item>
            </Paper>

            <SimpleBackdrop loading={indicator} /> {/**/}

        </Box>
    );
}

export default JobDetails;