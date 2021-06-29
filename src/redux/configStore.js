import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import rank from './modules/rank';
import quiz from './modules/quiz';

import thunk from "redux-thunk";

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory;


const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({rank, quiz});
const store = createStore(rootReducer, enhancer);

export default store;