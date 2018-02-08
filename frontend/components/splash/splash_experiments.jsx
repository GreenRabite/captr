import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import SplashContainer from './splash_container';
import Img from 'react-image';

class SplashExperiments extends React.Component {

  render(){
    return(
      <div className="splashBG">
        <div className="bodySplash">
          <h1>Follow your passion.</h1>
          <h3>Join the <strong>captr</strong> community and share your stories with passionate people</h3>
          <div className="button-front-page-container">
            <div className="button-main-page"><Link className="main-bttn" to="/login">Log In</Link></div>
            <div className="button-main-page"><Link className="main-bttn" onClick={()=>this.props.login({username:"dobrynin", password:"password"})} to="/">Demo Log In</Link></div>
          </div>
        </div>
        <ul className="slideshow">
          <li> <span>Slide One</span> </li>
          <li> <span>Slide Two</span> </li>
          <li> <span>Slide Three</span> </li>
          <li> <span>Slide Four</span> </li>
        </ul>
      </div>


  );}
}


export default SplashExperiments;
