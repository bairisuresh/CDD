import axios from 'axios';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';
import { logoutUser } from './auth';
import { STATIC_ERROR, FETCH_USER, FETCH_PLOG, FETCH_RLOG } from './types';
export const API_URL = 'http://localhost:3000/api';
export const CLIENT_ROOT_URL = 'http://localhost:8080';

//================================
// Utility actions
//================================

export function fetchUser(uid) {
  return function(dispatch) {
    axios.get(`${API_URL}/user/${uid}`, {
      headers: { 'Authorization': cookie.load('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_USER,
        payload: response.data.user
      });

    })
    .catch(response => dispatch(errorHandler(response.data.error)))
  }
}

export function fetchPlog(data) {
  return function(dispatch) {
    axios.get('src/data/plog.json')
    .then(response => {
      dispatch({
        type: FETCH_PLOG,
        payload: response.data
      });
      if(!data.tabclick)
        dispatch(fetchRlog(data));
    })
    .catch(response => {
      dispatch(errorHandler(response.data.error))
    })
  }
}

export function fetchRlog(data) {
  return function(dispatch) {
    axios.get('src/data/rlog.json')
    .then(response => {
      dispatch({
        type: FETCH_RLOG,
        payload: response.data
      });
      if(!data.tabclick)
        browserHistory.push('/dashboard');
    })
    .catch(response => { dispatch(errorHandler(response.data.error))})
  }
}

export function errorHandler(dispatch, error, type) {
  let errorMessage = (error.data.error) ? error.data.error : error.data;

   // NOT AUTHENTICATED ERROR
   if(error.status === 401) {
     errorMessage = 'You are not authorized to do this.';
   }

  dispatch({
    type: type,
    payload: errorMessage
  });
  //logoutUser();
}

// Post Request
export function postData(action, errorType, isAuthReq, url, dispatch, data) {
  const requestUrl = API_URL + url;
  let headers = {};

  if(isAuthReq) {
    headers = {headers: { 'Authorization': cookie.load('token') }};
  }

  axios.post(requestUrl, data, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType)
  });
}

// Get Request
export function getData(action, errorType, isAuthReq, url, dispatch) {
  const requestUrl = API_URL + url;
  let headers = {};

  if(isAuthReq) {
    headers = {headers: { 'Authorization': cookie.load('token') }};
  }

  axios.get(requestUrl, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType)
  });
}

// Put Request
export function putData(action, errorType, isAuthReq, url, dispatch, data) {
  const requestUrl = API_URL + url;
  let headers = {};

  if(isAuthReq) {
    headers = {headers: { 'Authorization': cookie.load('token') }};
  }

  axios.put(requestUrl, data, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType)
  });
}

// Delete Request
export function deleteData(action, errorType, isAuthReq, url, dispatch) {
  const requestUrl = API_URL + url;
  let headers = {};

  if(isAuthReq) {
    headers = {headers: { 'Authorization': cookie.load('token') }};
  }

  axios.delete(requestUrl, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType)
  });
}
