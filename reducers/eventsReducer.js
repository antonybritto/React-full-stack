import { GET_EVENTS_REQUEST, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE } from '../actions/constants.js';

export default function events(state = {
  events: [],
  error: false
}, action) {
  switch (action.type) {

    case GET_EVENTS_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false
      });
      
    case GET_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        events: action.data,
        error: false
      });

    case GET_EVENTS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: true
      });

    default:
      return state;
  }
}
