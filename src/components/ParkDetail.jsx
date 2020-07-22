import React from 'react';
import PropTypes from 'prop-types';

function ParkDetail(props) {
  const {park} = props;
  return (
    <>
    <h3>{park.name}</h3>
    <p>{park.address}</p>
    <p>{park.phone_number}</p>
    <p>{park.website}</p>

    </>
  )
}

ParkDetail.propTypes = {
  park: PropTypes.object
}

export default ParkDetail;