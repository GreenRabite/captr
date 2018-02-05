import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

// Components
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute} from './../utils/route_utils';
import Splash from './splash/splash';
import PhotoIndexContainer from './photo/photo_index_container';
import AlbumIndexContainer from './album/album_index_container';
import PhotoShowContainer from './photo/photo_show_container';
import AlbumShowContainer from './album/album_show_container';
import SplashContainer from './splash/splash_container';

import Footer from './footer';

const App = () => {

  return(
    <div>
      <header>
        <GreetingContainer/>
      </header>

      <Switch>
        <AuthRoute exact path="/login" component={Splash}   />
        <AuthRoute exact path="/signup" component={Splash} />
      </Switch>

      <Switch>
        <ProtectedRoute path="/home" component={PhotoIndexContainer} />
        <Route path="/photos/:photoId" component={PhotoShowContainer} />
        <Route exact path="/albums" component={AlbumIndexContainer} />
        <Route path="/albums/:albumId" component={AlbumShowContainer} />

        <AuthRoute path="/" component={SplashContainer}  />
      </Switch>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;
