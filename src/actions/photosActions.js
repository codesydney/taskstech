import taskstechApi from '../api/taskstechApi';
import * as actions from './actionTypes';

export const addPhoto = (photoData) => async dispatch => {
    const token = localStorage.getItem('token');

    try {
        taskstechApi.post(`/photos`, photoData, {
            headers: { 
                Authorization: `Bearer ${token}`, 
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                if (res.data) {
                    alert("Photo uploaded successfully!")
                    dispatch({type: actions.UPLOAD_PHOTO_SUCCESS, payload: res.data,});
                }
            })
    } catch (error) {
        console.log(error.message)
    }
}


export const getPhoto = (activity_id, filename) => async dispatch => {
    try {
        await taskstechApi.get(`/photos/${activity_id}/${filename}`);

        dispatch({ type: actions.GET_PHOTO_SUCCESS });
    } catch (error) {
        console.log(error.message)
    }
}
