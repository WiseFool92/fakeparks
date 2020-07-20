import * as c from './ActionTypes';

export const requestParks = () => ({
  type: c.REQUEST_PARKS
});

export const getParksSuccess = (parks) => ({
  type: c.GET_PARKS_SUCCESS,
  parks
});

export const getParksFailure = (error) => ({
  type: c.GET_PARKS_FAILURE, 
  error
});

export const makeApiCall = (page) => {
  return dispatch => {
    dispatch(requestParks);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://frozen-sea-48679.herokuapp.com/page?number=${page}`
    return fetch(proxyurl + url)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(getParksSuccess(jsonifiedResponse));
      } 
    )
    .catch((error) => {
      dispatch(getParksFailure(error))
    });
  }
}