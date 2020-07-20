import React from 'react';
import '../index.css';
import Header from "./Header";
import FPControl from './FPControl';

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <FPControl />
    </React.Fragment>
  );
}

export default App;