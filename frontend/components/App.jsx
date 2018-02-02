import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

// Components
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute} from './../utils/route_utils';
import SplashContainer from './splash/splash_container';
import PhotoIndexContainer from './photo/photo_index_container';
import SplashHeaders from './splash/splash_headers';
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


      <AuthRoute path="/" component={SplashHeaders}  />
      <Switch>
        <AuthRoute path="/login" component={SplashContainer}   />
        <AuthRoute path="/signup" component={SplashContainer} />
      </Switch>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;
