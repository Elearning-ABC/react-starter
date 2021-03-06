import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './rootMiddleware';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);

export default store;