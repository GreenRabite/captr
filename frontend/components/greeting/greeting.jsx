import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="nav">
    <div className="nav-logo">
      <Link to="/">
        <img src={window.staticImage.headerImage} alt="captr"></img>
      </Link>
    </div>

    <div className="nav-buttons">
      <div className="nav-button-login"><Link to="/login">Log In</Link></div>
      <Link to="/signup"><div className="main-bttn sign-up-bttn">Sign Up</div></Link>
    </div>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <hgroup className="nav">
      <div className="nav main-nav-bar">
        <div className="nav-logo">
          <Link to="/home">
            <img className="logo" src={window.staticImage.headerImage} alt="captr"></img>
          </Link>
        </div>
        <ul className="nav-links">
          <NavLink to="/home" ><li>Photos</li></NavLink>
          <NavLink to="/albums" ><li>Albums</li></NavLink>
          <a href="https://www.linkedin.com/in/andywluo/" target="_blank"><li>About Us</li></a>
        </ul>
        <div className="search">
          <span className="fa fa-search"></span>
          <input type="text" placeholder="Photos, people, or groups"></input>
        </div>
        <div className="right-side-nav-items">
          <Link to="/photos/upload"><i className="fas fa-cloud-upload-alt fa-2x"></i></Link>
          <div className="login-nav-right">
            <div className="dropdown">
              <button className="header-name dropbtn">Hello, {currentUser.fname} <i className="fa fa-caret-down"></i></button>
              <div className="dropdown-content">
                <Link to="/home">Explore Pictures</Link>
                <Link to="/albums">Explore Albums</Link>
                <Link to="/photos/upload">Photo Upload</Link>
              </div>
            </div>
            <div className="nav-buttons">
              <button className="main-bttn" onClick={logout}>Log Out</button>
            </div>
          </div>

        </div>
      </div>
    </hgroup>
</div>

);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
