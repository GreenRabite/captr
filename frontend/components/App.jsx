import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

// Components
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from './../utils/route_utils';
import SplashContainer from './splash/splash_container';
import Footer from './footer';

const App = () => {

  let splashHeading;
  if (window.currentUser === undefined) {
    splashHeading = "";
  }else {
    splashHeading = "hidden";
  }
  return(
    <div>
      <header>
        <GreetingContainer/>
      </header>
        <div className="bodySplash">
          <h1>Follow your passion.</h1>
          <h3>Join the <strong>captr</strong> community and share your stories with passionate people</h3>
        </div>;
      <Switch>

        <AuthRoute path="/login" component={SplashContainer}   />
        <AuthRoute path="/signup" component={SplashContainer}  />
      </Switch>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;
