import * as actions from '../actions/actionTypes';

const initialState = {
    "filename": "",
    "filename_thumb": ""
};

function photosReducer(state = initialState, action) {
    switch (action.type) {
        case actions.UPLOAD_PHOTO_SUCCESS:
            return {
                ...state,
                payload: action.payload,
            };
        case actions.GET_PHOTO_SUCCESS: 
            return {
                ...state,
                payload: action.payload,
            };
        default:
            return state;
    }
}

export default photosReducer;


