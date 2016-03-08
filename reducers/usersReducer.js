import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../actions/constants.js';

export default function events(state = {
  events: []
}, action) {
  switch (action.type) {

    case GET_USERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
      
    case GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        events: action.req.data
      });

    case GET_USERS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}
