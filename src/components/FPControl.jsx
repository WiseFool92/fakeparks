import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

class FPControl extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  
  componentDidMount() {
    const{dispatch} = this.props;
    dispatch(makeApiCall());
  }

  // makeApiCall takes in a number, create button to increase number on click, local state? 

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
}

const mapStateToProps = state => {
  return {
    parks: state.parks.parks,
    isLoading: state.parks.isLoading,
    error: state.parks.error,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

export default connect(mapStateToProps)(FPControl);