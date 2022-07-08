import { combineReducers } from 'redux';
import userReducer from './userReducer';
import homeReducer from './homeReducer';


export default combineReducers({
    user: userReducer,
    home: homeReducer

});
