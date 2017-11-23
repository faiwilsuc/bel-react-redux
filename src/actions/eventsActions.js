import * as types from '../constants/actionTypes';
import Axios from 'axios';

const apiEvents = 'https://api---develop-sr3snxi-q2ni5fnmrkiss.eu.platform.sh/v1/points';

export const fetchEventsSuccess = (events) => {
    return {
        type: types.FETCH_EVENTS_SUCCESS,
        events
    }
};

export const fetchEvents = () => {
    return (dispatch) => {
        return Axios.get(apiEvents)
        .then(response => {
            dispatch(fetchEventsSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}


export const filterEvents = (events) => {
    return {
        type: types.FILTER_EVENTS,
        events
    }
}

export const selectEventsSuccess = (coordinates) => {
    return {
        type:types.SELECT_EVENTS_SUCCESS,
        coordinates
    }
};