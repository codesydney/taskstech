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