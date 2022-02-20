import taskstechApi from '../api/taskstechApi';
import * as actions from './actionTypes';


export const addPhoto = (photoData) => async dispatch => {
    const token = localStorage.getItem('token');

    try {
        dispatch({
            type: actions.UPLOAD_PHOTO_STARTED,
            loading: true,
        });

        taskstechApi.post(`/photos`, photoData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                if (res.data) {
                    console.log(res.data)
                    alert("Photo uploaded successfully!")
                    dispatch({
                        type: actions.UPLOAD_PHOTO_SUCCESS,
                        filename: res.data.filename,
                        thumbnail: res.data.thumbnail,
                        loading: false
                    });
                }
            })
    } catch (error) {
        console.log(error.message)
    }
}


export const getPhoto = (activity_id, filename) => async dispatch => {
    try {
        await taskstechApi
            .get(`/photos/${activity_id}/${filename}`)
            .then(res => {
                if (res.data) {
                    //console.log(res)
                    dispatch({
                        type: actions.GET_PHOTO_SUCCESS,
                        filename: JSON.parse(res.data.filename),
                        filename_thumb: res.data.thumbnail,
                    });
                }
            });


    } catch (error) {
        console.log(error.message)
    }
}
