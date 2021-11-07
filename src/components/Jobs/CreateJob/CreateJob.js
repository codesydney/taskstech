import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Lookup from '../../../common/Lookup';
import { useDispatch, useSelector } from "react-redux";
import SimpleBackdrop from "../../Loading/SimpleBackdrop";
import { getStatus } from "../../../actions/action";
import { getCustomers } from "../../../actions/customerActions";
import { createJob } from '../../../actions/action';
import { useState } from "react";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const CreateJob = () => {
    const [jobName, setJobName] = useState('');
    const [description, setDescription] = useState('');
    const [tradespersonId, setTradespersonId] = useState('');

    const [jobNameIsValid, setJobNameIsValid] = useState(false);
    const [descriptionIsValid, setDescriptionIsValid] = useState(false);
    const [tradespersonIdIsValid, setTradespersonIdIsValid] = useState(false);
    const [customerNameIsValid, setCustomerNameIsValid] = useState(false);

    const [errors, setErrors] = useState({
        jobName: { helperText: '', fieldError: false },
        description: { helperText: '', fieldError: false },
        tradesperson_id: { helperText: '', fieldError: false },
        customer_id: { helperText: '', fieldError: false },
    });

    const [customerName, setCustomerName] = useState('');
    const [customerId, setCustomerId] = useState(0);
    const [jobStatus, setJobStatus] = useState('Not yet started');
    const [jobStatusId, setJobStatusId] = useState(1);
    const status = useSelector((state) => state.status.job);
    const { customers } = useSelector((state) => state);
    const indicator = useSelector((state) => state.job.loading);
    const matches = useMediaQuery('(max-width:600px)');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStatus());
        dispatch(getCustomers())
    }, [indicator]);

    let jobObject = {
        name: jobName,
        description: description,
        job_status_id: jobStatusId,
        tradesperson_id: tradespersonId,
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
        if (name === "tradesperson_id") {
            setTradespersonId(value);

            switch (fieldError) {
                case false:
                    setTradespersonIdIsValid(true);
                    setErrors({ [name]: { helperText, fieldError } });
                    break;
                case true:
                    setTradespersonIdIsValid(false);
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

                    if (fieldError === false) {//
                        setCustomerName(value);
                        setCustomerNameIsValid(true); //
                        setErrors({ [name]: { helperText, fieldError } });
                        console.log(errors)
                    }
                    if (fieldError === true) {
                        setCustomerNameIsValid(false);//
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

    const isNotValid = () => {
        if (jobNameIsValid &&
            descriptionIsValid &&
            tradespersonIdIsValid &&
            customerNameIsValid) {
            return false;
        }
        else {
            return true;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(createJob(jobObject, true));
        resetFields();
        console.log(jobObject)
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
                        ? '35vw'
                        : '70vw !important'
                },
            }}
        >
            {/* <FormNav /> */}
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
                    <Typography component="div" variant="h4">
                        Create New Job
                    </Typography>
                    <Typography sx={{ margin: '0' }} gutterBottom variant="span">
                        Please fill the job details
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        *Required
                    </Typography>
                </Item>
                <Item>
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
                    <div>
                        {/* Will be replaced with lookup */}
                        <TextField
                            error={false}
                            value={tradespersonId}
                            name='tradesperson_id'
                            required
                            id="outlined-error-helper-text"
                            label="Tradesperson Id"
                            variant="outlined"
                            onChange={handleUserInput}
                        />
                    </div>


                </Item>
                <Item>
                    <div>
                        <Button
                            disabled={isNotValid()}
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Create
                        </Button>
                    </div>
                </Item>
            </Paper>

            <SimpleBackdrop loading={indicator} /> {/**/}
        </Box>
    );
}

export default CreateJob;