import * as types from '../constants/actionTypes';
import initialState from './initialState';

export const townsReducer = (state=initialState.towns, action) => {
    switch (action.type){
       case types.FETCH_TOWNS_SUCCESS:
         return action.towns.data;
        default:
         return state;
    }
};

export const townReducer = (state = initialState.townpos, action) => {
    switch (action.type) {
        case types.SELECT_TOWN:
         return Object.assign({}, state, action.townpos);
        default:
         return state;
    }
}