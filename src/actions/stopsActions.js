import * as types from '../constants/actionTypes';
import Axios from 'axios';

const apiStops = 'https://api---develop-sr3snxi-q2ni5fnmrkiss.eu.platform.sh/v1/stops';

export const fetchStopsSuccess = (stops) => {
    return {
        type: types.FETCH_STOPS_SUCCESS,
        stops
    }
};

export const fetchStops = () => {
    return (dispatch) => {
        return Axios.get(apiStops)
        .then(response => {
            dispatch(fetchStopsSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}
