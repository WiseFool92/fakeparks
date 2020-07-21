import React from "react";

function LandingPage(){
  return (
    <>
  
      <h1 className="homeDrop">Welcome To Le Parks</h1>
      
      <h2>About Our Parks</h2>
      <p>The National Park Service preserves unimpaired the natural and cultural resources and values of the National Park System for the enjoyment, education, and inspiration of this and future generations. The Park Service cooperates with partners to extend the benefits of natural and cultural resource conservation and outdoor recreation throughout this country and the world.</p>

      <h2> Park Rules </h2>
      <h4>Acceptable</h4>
        <ul className="rules">
          <li>Rollerblades</li>
          <li>Skateboards</li>
          <li>Bikes</li>
        </ul>
      <h4>Unacceptable</h4>
        <ul className="rules">
          <li>Fireworks</li>
          <li>Alcohol</li>
        </ul>
    </>
  );
}

export default LandingPage;