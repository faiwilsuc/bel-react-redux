import { combineReducers } from 'redux';
import { eventsReducer, coordinatesReducer, filteredEventsReducer } from './eventsReducer';
import { townsReducer, townReducer } from './townsReducer';
import { stopsReducer } from './stopsReducer';
import { storesReducer } from './storesReducer';
import { planReducer } from './planReducer';

const rootReducer = combineReducers({

   events: eventsReducer,
   filteredEvents: filteredEventsReducer,
   planEvents: planReducer,
   townpos: townReducer,
   towns: townsReducer,
   stops: stopsReducer,
   stores: storesReducer

});
export default rootReducer;