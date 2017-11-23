import * as types from '../constants/actionTypes';
import initialState from './initialState';

 export const eventsReducer = (state = initialState.events, action) => {
  switch (action.type) {
      case types.FETCH_EVENTS_SUCCESS:
            return action.events.data;
      default:
            return state;
  }
};

export const filteredEventsReducer = (state = initialState.filteredEvents, action) => {
  switch (action.type) {
      case types.FILTER_EVENTS:
            return action.events;
      default:
            return state;
  }
};


