import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// #if process.env.NODE_ENV === 'DEVELOPMENT'
import logger from 'redux-logger';
// #endif
import rootReducer from './rootReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

// #if process.env.NODE_ENV === 'DEVELOPMENT'
middlewares.push(logger);
// #endif

const store = createStore(
  rootReducer,
  {
  },
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

export default store;
