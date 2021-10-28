import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createJob } from '../actions/action';


export const useFormControl = () => {
    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});
    const [customerName, setCustomerName] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [jobStatus, setJobStatus] = useState('Not yet started');
    const [jobStatusId, setJobStatusId] = useState(1);
    const nameLimitRegex = /^.{29,30}$/;
    const descriptionLimitRegex = /^.{99,100}$/;
    const dispatch = useDispatch();

    let jobObject = {
        name: fields.jobName,
        description: fields.description,
        job_status_id: fields.job_status_id,
        tradesperson_id: fields.tradesperson_id,
        customer_id: Number(customerId)//Number(fields.customer_id)
    }

    let customerLookup = {
        user_id: 0,
        first_name: '',
        last_name: ''
    };

    const handleUserInput = event => {
        const { name, value } = event.target
        setFields({ ...fields, [name]: value });
        validate(fields); // { [name]: value }
    };

    const handleDropdownChange = event => {
        event.preventDefault();
        const { name } = event.target
        const index = event.target.selectedIndex;
        const el = event.target.childNodes[index]
        const option = el.getAttribute('id');
        
        setJobStatus(event.target.value)
        setJobStatusId(Number(option))
        setFields({ ...fields, [name]: Number(jobStatusId) });
    };

    const handleLookupDropdownChange = (event, params = customerLookup) => {
        event.preventDefault();
        const {  value } = event.target;
        
        
        console.log(params.props)
        setCustomerId(params.props.user_id);
        setCustomerName(value);
        
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log('customerId')
        console.log(customerId)
        dispatch(createJob(jobObject, true));
        resetFields();
    };

    const resetFields = () => {
        setFields({
            customer_id: '',
            description: '',
            jobName: '',
            job_status_id: 1,
            tradesperson_id: ''
        })
    }

    const validate = (fieldValues = fields) => {
        let temp = { ...errors }
        const { jobName, description } = fieldValues;

        if ("jobName" in fieldValues) {
            temp.helperText = jobName.length === 0
                ? temp.helperText = 'This is a required field.'
                : '';

            if (jobName) {
                temp.helperText = jobName.length > 0 && nameLimitRegex.test(jobName)
                    ? 'Maximum character limit reached.'
                    : '';
            }

        }
        if ("description" in fieldValues) {
            temp.helperText = description.length === 0
                ? temp.helperText = 'This is a required field.'
                : '';

            if (description) {
                temp.helperText = description.length > 0 && descriptionLimitRegex.test(description)
                    ? 'Maximum character limit reached.'
                    : '';
            }
        }

        setErrors(temp);

    };

    const formIsValid = () => {
        const { jobName, description } = fields;

        let isValid = jobName && description && Object.values(errors)
            .every(v => v === '') ? true : false;

        return isValid;
    };

    return {
        validate,
        handleUserInput,
        handleDropdownChange,
        handleLookupDropdownChange,
        handleSubmit,
        jobStatus,
        jobStatusId,
        formIsValid,
        errors,
        fields,
        customerName
    }
}