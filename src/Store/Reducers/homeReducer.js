import {
    HOME_DATA,
    OTHER_DATA
} from '../Actions/type'

const initialState = {

    homedata: [],
    otherdata: []
}

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case HOME_DATA:
            return {
                ...state,
                homedata: payload,
            };
        case OTHER_DATA:
            return {
                ...state,
                otherdata: payload,
            }
        default:
            return state;
    }
};