import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

// Components
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute} from './../utils/route_utils';
import Splash from './splash/splash';
import PhotoIndexContainer from './photo/photo_index_container';
import SplashContainer from './splash/splash_container';
import Footer from './footer';

const App = () => {

  return(
    <div>
      <header>
        <GreetingContainer/>
      </header>


      <ProtectedRoute path="/" component={PhotoIndexContainer} />
      <Switch>
      </Switch>


      <AuthRoute path="/" component={SplashContainer}  />
      <Switch>
        <AuthRoute path="/login" component={Splash}   />
        <AuthRoute path="/signup" component={Splash} />
      </Switch>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;
