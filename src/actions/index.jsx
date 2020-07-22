import * as c from "./ActionTypes";


export const selectPark = (park) => {
  const {id, name, address, phone_number, website} = park;
  return { 
    type: c.SELECTED_PARK,
    id: id,
    name: name, 
    address: address, 
    phone_number: phone_number, 
    website: website
  }
}

// for navigating between page views
export const seeForm = () => ({
  type: c.SEE_FORM,
});

export const seePark = () => ({
  type: c.SEE_PARK,
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

// for all parks!
export const makeApiCall = () => {
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

// export const paginateApi = (page) => {
//   return (dispatch) => {
//     dispatch(requestParks);
//     console.log(page);
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     const url = `https://frozen-sea-48679.herokuapp.com/page?number=${page}`;
//     return fetch(proxyurl + url)
//       .then((response) => response.json())
//       .then((jsonifiedResponse) => {
//         dispatch(getParksSuccess(jsonifiedResponse));
//       })
//       .catch((error) => {
//         dispatch(getParksFailure(error));
//       });
//   };
// };
