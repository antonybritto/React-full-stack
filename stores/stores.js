import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from '../reducers';

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		createLogger()
	)
);

export default store;
