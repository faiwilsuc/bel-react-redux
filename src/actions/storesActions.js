import * as types from '../constants/actionTypes';
import Axios from 'axios';

const apiStores = 'https://api---develop-sr3snxi-q2ni5fnmrkiss.eu.platform.sh/v1/stores';

export const fetchStoresSuccess = (stores) => {
    return {
        type: types.FETCH_STORES_SUCCESS,
        stores
    }
};

export const fetchStores = () => {
    return (dispatch) => {
        return Axios.get(apiStores)
        .then(response => {
            dispatch(fetchStoresSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}