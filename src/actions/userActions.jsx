import { USER } from './actionTypes';

export const userAction = value => ({
    type: USER,
    payload: value.data,
});
