import * as types from '../constants/actionTypes';
import initialState from './initialState';

export const storesReducer = (state=initialState.stores, action) => {
    switch (action.type){
       case types.FETCH_STORES_SUCCESS:
         return action.stores.data;
        default:
         return state;
    }
};
