import * as types from '../constants/actionTypes';
import Axios from 'axios';

const apiTowns = 'https://api---develop-sr3snxi-q2ni5fnmrkiss.eu.platform.sh/v1/towns';

export const fetchTownsSuccess = (towns) => {
    return {
        type: types.FETCH_TOWNS_SUCCESS,
        towns
    }
};

export const fetchTowns = () => {
    return (dispatch) => {
        return Axios.get(apiTowns)
        .then(response => {
            dispatch(fetchTownsSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}

export const selectTown = (townpos) => {
    return {
        type: types.SELECT_TOWN,
        townpos
    }
}


