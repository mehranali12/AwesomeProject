import {
    USER_DATA
} from '../Actions/type'

const initialState = {
    userData: null,
    
}

export default (state = initialState, { type, payload }) => {
    
    switch (type) {
        case USER_DATA:
            return {
                ...state,
                userData: payload,
            };
        default:
            return state;
    }
};