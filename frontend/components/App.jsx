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
import PhotoFormContainer from './photo/photo_form_container';
import PhotoModal from './photo/photo_modal';
import AlbumModal from './album/album_modal';
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
      <AuthRoute exact path="/" component={SplashContainer}  />


      <ProtectedRoute exact path="/albums/new" component={AlbumModal} />
      <ProtectedRoute exact path="/albums/:albumId/photos/new" component={PhotoModal} />
      <ProtectedRoute exact path="/photos/:photoId/edit" component={PhotoModal} />
      <ProtectedRoute exact path="/albums/:albumId/edit" component={AlbumModal} />

      <Switch>
        // Ugly Routing
        <ProtectedRoute exact path="/albums/new" component={AlbumIndexContainer} />
        <ProtectedRoute path="/albums/:albumId" component={AlbumShowContainer} />
        <ProtectedRoute path="/albums" component={AlbumIndexContainer} />
        <ProtectedRoute path="/home" component={PhotoIndexContainer} />
        <ProtectedRoute path="/photos/:photoId" component={PhotoShowContainer} />
      </Switch>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;
