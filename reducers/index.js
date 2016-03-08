import { combineReducers } from 'redux';
import events from './eventsReducer.js';
//import users from './usersReducer.js';
//import { routeReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  events
});

export default rootReducer;