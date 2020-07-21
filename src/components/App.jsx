import React from 'react';
import '../index.css';
import Header from "./Header";
import FPControl from './FPControl';

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <div className = "box">
        <FPControl />
      </div>
    </React.Fragment>
  );
}

export default App;