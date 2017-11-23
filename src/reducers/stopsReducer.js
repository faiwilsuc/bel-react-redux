import * as types from '../constants/actionTypes';
import initialState from './initialState';

export const stopsReducer = (state=initialState.stops, action) => {
    switch (action.type){
       case types.FETCH_STOPS_SUCCESS:
    //    console.log("REDUCER", action.stops.data)
         return action.stops.data;
        default:
         return state;
    }
};
