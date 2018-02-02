import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import SplashContainer from './splash_container';

class SplashHeaders extends React.Component {

  render(){
    return (
    <div className="splashBG">
      <div className="bodySplash">
        <h1>Follow your passion.</h1>
        <h3>Join the <strong>captr</strong> community and share your stories with passionate people</h3>
        <div className="button-front-page-container">
          <Link className="bttn-gradient" to="/login">Log In</Link> <br/>
          <Link className="bttn-gradient" onClick={()=>this.props.login({username:"dobrynin", password:"password"})} to="/">Demo Log In</Link>
        </div>
      </div>
    </div>
  );}
}


export default SplashHeaders;
