import React from "react";
import { connect } from "react-redux";
import * as a from "./../actions";
import LandingPage from "./LandingPage";
import ParkList from "./ParksList";
import {useState, useEffect} from 'react'
import ParkDetail from './ParkDetail'

class FPControl extends React.Component {

  landingPageClick = () => {
    const { dispatch } = this.props;
    dispatch(a.seeLandingPage());
  };

  seeParksClick = () => {
    const { dispatch } = this.props;
    dispatch(a.seeParkList());
    dispatch(a.unselectPark());
  };

  handleChangingPark = (park) => {
    const {dispatch} = this.props;
    const action = a.selectPark(park)
    console.log("park: ", park)
    console.log("props.park: ", this.props.selectedPark);
    dispatch(action)
    // const selectedPark = this.props.parks[id];
    // this.setState({selectedPark: selectedPark})
  }

  // Async React Hook
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(a.makeApiCall());
  }

  // makeApiCall takes in a number, create button to increase number on click, local state?

  render() {
    let currentView = null;
    let button1 = null;
    let button2 = null;

    if (this.props.selectedPark !=null) {
      currentView = <ParkDetail
      park = {this.props.selectedPark}/>
      button2 = <button onClick={this.seeParksClick}>Back</button>;
    } 
    else if (this.props.formVisibleOnPage === "landing-page") {
      currentView = <LandingPage />;
      button2 = <button onClick={this.seeParksClick}>See All Parks </button>;
    } else if (this.props.formVisibleOnPage === "park-list") {
      button1 = <button onClick={this.landingPageClick}>Home</button>;
      currentView = <ParkList parks={this.props} onParkSelection={this.handleChangingPark}/>;
    } 
    return (
      <>
        <div className = 'button-wrapper'>
          {button1}
          {currentView}
          {button2}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    parks: state.parks.parks,
    isLoading: state.parks.isLoading,
    error: state.parks.error,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedPark : state.selectedPark
  };
};

export default connect(mapStateToProps)(FPControl);