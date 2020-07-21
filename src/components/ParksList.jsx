import React from 'react';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { makeApiCall } from '../actions';

function ParkList(props) {
  // function componentDidMount() {
  //   const{dispatch} = props;
  //   dispatch(a.makeApiCall());
  // }
  const {error, isLoading, parks } = props.parks
    if (error) {
      return (
        <>
          Error: {error.message}
        </>
      ) 
    } else if (isLoading) {
        return (
          <>
            Loading...
          </>
        )
    } else {
      return (
        <>
        <div className="org">
          <ul>
            {parks.map((park, index) => 
              <li key = {index}>
                <h3>{park.name}</h3>
                <p>{park.address}</p>
                <p>{park.phone_number}</p>
              </li>
            )}
          </ul>
        </div>
        </>
      ) 
    }
}

export default ParkList;