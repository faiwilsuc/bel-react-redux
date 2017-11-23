import * as types from '../constants/actionTypes';
import Axios from 'axios';

export const planRoute = (events, townpos, stops) => {
    return {
        type: types.PLAN_ROUTE,
        payload: {
            events,
            townpos,
            stops
        }
    }
}

export const reset = () => {
    return {
        type: types.PLAN_RESET
    }
}
