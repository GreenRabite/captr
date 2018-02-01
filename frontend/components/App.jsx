import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

// Components
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from './../utils/route_utils';
import SplashContainer from './splash/splash_container';
import SplashHeaders from './splash/splash_headers';
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
      <Switch>
        <AuthRoute exact path="/" component={SplashHeaders}   />
        <AuthRoute exact path="/login" component={SplashHeaders}   />
        <AuthRoute exact path="/signup" component={SplashHeaders}   />
      </Switch>
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
