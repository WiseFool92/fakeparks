import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

class FPControl extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const{dispatch} = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, parks } = this.props;
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
        <h1>Parks</h1>
        <ul>
          {parks.map((park, index) => 
          <li key = {index}>
            <h3>{park.name}</h3>
            <p>{park.address}</p>
            <p>{park.phone_number}</p>
          </li>)}
        </ul>
        </>
      ) 
    }
  }
}

const mapStateToProps = state => {
  return {
    parks: state.parks,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(FPControl);