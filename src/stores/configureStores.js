import { createStore, compose,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

const configureStore = (initialState) => {
  const middlewares = [
      thunkMiddleware,
  ];

  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

  return createStore(rootReducer, initialState, composeEnhancers(
      applyMiddleware(...middlewares)
   )
  );

};
export default configureStore;
