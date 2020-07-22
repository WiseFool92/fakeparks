import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import '../index.css';

function Park(props) {
  
  return (
    <>
      <div className="parent">
        <div className="row">
          <div className="col-md-6">
            {/* <Button color="info"> */}
              <div onClick = {() => props.selectedPark(props)}>
                <h2>{props.name}</h2>
              </div>
            {/* </Button> */}
          </div>
        </div>
      </div>
    </>
  )
}

Park.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  website: PropTypes.string,
  id: PropTypes.number,
  selectedPark: PropTypes.func
}

export default Park;