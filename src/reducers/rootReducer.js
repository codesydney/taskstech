import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import jobsReducer from '../reducers/jobsReducer';
import jobStatusReducer from '../reducers/jobStatusReducer';
import activityReducer from '../reducers/activityReducer';
import traderReducer from '../reducers/traderReducer';
import inventoryReducer from './inventoryReducer';
import customersReducer from './customersReducer';
import photosReducer from './photosReducer';


const rootReducer = history => combineReducers({
    router:connectRouter(history),
    trader:traderReducer,
    status: jobStatusReducer,
    job: jobsReducer,
    photo: photosReducer,
    activity: activityReducer,
    customers: customersReducer,
    inventory:inventoryReducer
});

export default rootReducer;