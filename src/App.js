import React from 'react';
import { Switch } from 'react-router-dom';

import AppBar from './components/AppBar';
//  import PrivateRoute from './servises/PrivateRoute';
import PublicRoute from './servises/PublicRoute';
import routes from './routes';
import RegistrationView from './views/Registration';
import LoginView from './views/Login';

function App() {
  return (
    <div className="">
      <AppBar />
      <Switch>
        <PublicRoute path={routes.registrationView}>
          <RegistrationView />
        </PublicRoute>

        <PublicRoute path={routes.loginView}>
          <LoginView />
        </PublicRoute>
      </Switch>
    </div>
  );
}

export default App;
