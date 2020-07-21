import React from "react";

function LandingPage(){
  return (
    <>
      <h1 className="homeDrop">Welcome To Le Parks</h1>
      
      <h2>About Our Parks</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <h2> Park Rules </h2>
        <ul className="rules">
          <li>Biking, skating & rollerblades are okay</li>
          <li>No alcohol</li>
          <li>No fireworks</li>
        </ul>
    </>
  );
}

export default LandingPage;