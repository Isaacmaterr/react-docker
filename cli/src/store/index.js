import { createStore,applyMiddleware } from 'redux';
import { Reducers } from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
const enchamters =applyMiddleware(thunk,logger);
export const Store = createStore(Reducers,enchamters);