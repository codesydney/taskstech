import * as actions from './actionTypes';
import taskstechApi from '../api/taskstechApi';


export const getCustomers = (loading = true) => async dispatch => {
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: `Bearer ${token}` } };

    try {
        taskstechApi.get(`/users/customer`, config)
            .then(res => {
                
                dispatch({
                    type: actions.GET_CUSTOMERS_STARTED,
                    loading: loading
                });
                if (res.data) {
                    dispatch({
                        type: actions.GET_CUSTOMERS,
                        payload: res.data,
                        loading: false
                    });
                }
               /*console.log(res.data); */
               
            })
    } catch (error) {
        console.log(error.message)
    }
}



export const customerRegistration = (firstname, lastname, email,  address, phone) => {
    return async () => {
        const customerRegistrationData = {
            email: email,
            first_name: firstname,
            last_name: lastname,
            address:address,
            phone: phone,
        }
        console.log(customerRegistrationData)
        try {
            taskstechApi.post('users/customer', customerRegistrationData)
                .then(res => {
                    console.log(res)
                    alert("Customer has been registered successfully.")
                    // dispatch(push('/login'))
                })
        } catch (error) {
            console.log(error.message)
        }
    }
}
