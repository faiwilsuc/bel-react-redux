import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStores';
import * as eventsActions from './actions/eventsActions';
import * as townsActions from './actions/townsActions';
import * as stopsActions from './actions/stopsActions';
import * as storesActions from './actions/storesActions';

const store = configureStore();

store.dispatch(eventsActions.fetchEvents());
store.dispatch(townsActions.fetchTowns());
store.dispatch(stopsActions.fetchStops());
store.dispatch(storesActions.fetchStores());


ReactDOM.render(
<Provider store = {store}>
    <Router history={browserHistory} routes={routes}/>
</Provider>,document.getElementById('root')
);
