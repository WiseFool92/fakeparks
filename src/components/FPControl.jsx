import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import * as a from './../actions';
import LandingPage from './LandingPage';
import ParkList from './ParksList';

class FPControl extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  
  landingPageClick = () => {
    const {dispatch} = this.props;
    dispatch(a.seeLandingPage());
  }

  seeParksClick = () => {
    const {dispatch} = this.props;
    dispatch(a.seeParkList());
  }

  
  // Async React Hook
  componentDidMount(){
    const{dispatch} = this.props;
  
    dispatch(a.makeApiCall());
    
  }
  

  // searchApiCall = () => {
  //   componentDidMount () {
  //     const{dispatch} = this.props;
  //     dispatch(a.makeApiCall());
  //   }
  // }
  
  // makeApiCall takes in a number, create button to increase number on click, local state? 

  render() {
    let currentView = null; 
    let button1 = null;
    let button2 = null;

    if (this.props.formVisibleOnPage === 'landing-page') {
      currentView = <LandingPage/>
      button2 = <button onClick={this.seeParksClick}>See All Parks </button>
      
    } else if (this.props.formVisibleOnPage === 'park-list') {
      button1 = <button onClick={this.landingPageClick}>Home</button>
      currentView = <ParkList apiCall = {this.componentDidMount} parks = {this.props}/>
    }
    return (
      <>
        {button1}
        {currentView}
        {button2}
       
      </>
    )
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