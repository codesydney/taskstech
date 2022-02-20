import * as actions from '../actions/actionTypes';

const initialState = {
    "filename": "",
    "filename_thumb": ""
};

function photosReducer(state = initialState, action) {
    switch (action.type) {
        case actions.UPLOAD_PHOTO_STARTED:
            return {
                ...state,
                loading: true
            };
        case actions.UPLOAD_PHOTO_SUCCESS:
            return {
                ...state,
                payload: action.payload,
                filename: action.payload?.filename,
                thumbnail: action.payload?.thumbnail,
                loading: false
            };
        case actions.GET_PHOTO_SUCCESS: 
            return {
                ...state,
                filename: action.payload?.filename,
                filename_thumb: action.payload?.thumbnail,
            };
        default:
            return state;
    }
}

export default photosReducer;


