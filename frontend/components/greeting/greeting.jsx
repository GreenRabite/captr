import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="nav">
    <div className="nav-logo">
      <img src={window.staticImage.headerImage} alt="captr"></img>
    </div>
    <div>
      <input type="text" placeholder="Photos, people, or groups" className="nav-search form-style-6"></input>
    </div>
    <div className="nav-buttons">
      <div className="nav-button-login"><Link to="/login">Log In</Link></div>
      <div className="bttn-gradient"><Link to="/signup">Sign Up</Link></div>
    </div>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="nav">
    <div className="nav-logo">
      <img src={window.staticImage.headerImage} alt="captr"></img>
    </div>
    <div>
      <input type="text" placeholder="Photos, people, or groups" className="nav-search"></input>
    </div>
    <div className="login-nav-right">
      <h2 className="header-name">Hi, {currentUser.fname}!</h2>
      <button className="bttn-gradient" onClick={logout}>Log Out</button>
    </div>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
