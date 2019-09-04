import { USER } from '../actions/actionTypes';
import initialState from './initialState';

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
    case USER:
        return { ...state, ...action.payload };
    default:
        return state;
    }
};
export default userReducer;
