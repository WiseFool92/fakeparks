import React from 'react';
import PropTypes from 'prop-types';
import Park from './Park';


// placed on line 15 -> made infinate calls to API
// function componentDidMount() {
//   const{dispatch} = props.parks;
//   dispatch(a.makeApiCall());
// }
// componentDidMount()

function ParkList(props) {
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
      // componentDidMount()
      return (
        <>
        <div className="org">
          <ul>
            {parks.map((park) => {
              return <Park
              name = {park.name}
              address = {park.address}
              website = {park.website}
              key = {park.id}
              id = {park.id}
              />
            }
            )}
          </ul>
        </div>
        </>
      ) 
    }
}

ParkList.propTypes = {
  onParkSelection: PropTypes.func
}

export default ParkList;

