import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeaders = () => (
  <div className="bodySplash">
    <h1>Follow your passion.</h1>
    <h3>Join the <strong>captr</strong> community and share your stories with passionate people</h3>
    <div className="button-front-page-container">
      <button onClick={()=>console.log("I've been pushed!")} className="button-front-page shadow"><Link to="/signup">Sign Up</Link></button> <br/>
      <button className="button-front-page shadow"><Link to="/signup">Demo Log In</Link></button> <br/>
    </div>
  </div>
);

export default SplashHeaders;
