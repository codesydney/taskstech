import taskstechApi from '../api/taskstechApi';
import { push } from 'connected-react-router';

export const addPhoto = (photoData) => async dispatch => {
    const token = localStorage.getItem('token');
    try {
        taskstechApi.post(`/photos`, photoData, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                console.log(res)
                alert("Photo uploaded successfully!")
                dispatch(push('/jobs/diary'))
            })
    } catch (error) {
        console.log(error.message)
    }
}