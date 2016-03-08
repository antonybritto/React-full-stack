//import { polyfill } from 'es6-promise';
import * as actions from './constants.js';
//polyfill();

const headers = {
	'Content-Type': 'application/json'
}

export function getEvents() {
    return {type: actions.GET_EVENTS_REQUEST};
}

export function getEventsSuccess(data) {
    return {type: actions.GET_EVENTS_SUCCESS, data};
}

export function getEventsError(error) {
    return {type: actions.GET_EVENTS_ERROR, error};
}

export function fetchEvents() {
	return (dispatch) => {
	    dispatch(getEvents());
	    return fetch('/events', { headers, method: 'get' })
	        .then(response => response.ok ? response.json() : Promise.reject(new Error('Api Error')))
	        .then(json => {
	            dispatch(getEventsSuccess(json));
	        }, err => dispatch(getEventsError(err)));
	};
}