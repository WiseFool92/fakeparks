import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import '../index.css';

function Park(props) {
  return (
    <>
      <Button color="info">
        <div onClick = {() => props.selectedPark(props.id)}>
          <h2>{props.name}</h2> <hr/>
          <p>{props.address}</p>
          <p>{props.website}</p>
        </div>
      </Button>
    </>
  )
}

Park.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  website: PropTypes.string,
  id: PropTypes.string,
  selectedPark: PropTypes.func
}

export default Park;