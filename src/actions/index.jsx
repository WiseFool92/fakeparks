import * as c from "./ActionTypes";

// for navigating between page views
export const seeForm = () => ({
  type: c.SEE_FORM,
});

// Home Page
export const seeLandingPage = () => ({
  type: c.LANDING_PAGE,
});

// Park Page
export const seeParkList = () => ({
  type: c.PARK_LIST,
});

// for API calls
export const requestParks = () => ({
  type: c.REQUEST_PARKS,
});
// for API calls
export const getParksSuccess = (parks) => ({
  type: c.GET_PARKS_SUCCESS,
  parks,
});
// for API calls
export const getParksFailure = (error) => ({
  type: c.GET_PARKS_FAILURE,
  error,
});

// ALL API CALLS:
// for searching for a park
export const searchApi = (searchTerm) => {
  return (dispatch) => {
    dispatch(requestParks);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://frozen-sea-48679.herokuapp.com/search?query=${searchTerm}`;
    return fetch(proxyurl + url)
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        dispatch(getParksSuccess(jsonifiedResponse));
      })
      .catch((error) => {
        dispatch(getParksFailure(error));
      });
  };
};

// for adding a park
export const addParkToApi = (parkData) => {
  let { name, address, phone_number, open, website } = parkData;
  return (dispatch) => {
    dispatch(requestParks);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://frozen-sea-48679.herokuapp.com/parks`;
    return fetch(proxyurl + url, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        address: address,
        phone_number: phone_number,
        open: open,
        website: website,
      }),
    })
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        dispatch(getParksSuccess(jsonifiedResponse));
      })
      .catch((error) => {
        dispatch(getParksFailure(error));
      });
  };
};

// https://frozen-sea-48679.herokuapp.com/parks/?name=Fake Park&address=123 4th St Portland, OR 97217&website=somewebsite.com&phone_number=(503)111-2222&open=true

// for all parks!
export const makeApiCall = () => {
  // if (value === "something") {

  // }else if (value === 'something-else') {
  // }

  return (dispatch) => {
    dispatch(requestParks);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://frozen-sea-48679.herokuapp.com/parks`;
    return fetch(proxyurl + url)
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        // console.log(jsonifiedRepsonse)
        dispatch(getParksSuccess(jsonifiedResponse));
      })
      .catch((error) => {
        dispatch(getParksFailure(error));
      });
  };
};

export const paginateApi = (page) => {
  return (dispatch) => {
    dispatch(requestParks);
    console.log(page);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://frozen-sea-48679.herokuapp.com/page?number=${page}`;
    return fetch(proxyurl + url)
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        dispatch(getParksSuccess(jsonifiedResponse));
      })
      .catch((error) => {
        dispatch(getParksFailure(error));
      });
  };
};
