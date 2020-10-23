import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';

import AppBar from './components/AppBar';
//  import PrivateRoute from './servises/PrivateRoute';
import PublicRoute from './servises/PublicRoute';
import routes from './routes';
import RegistrationView from './views/Registration';
import LoginView from './views/Login';
import ErrorView from './views/Error';
import Loader from 'react-loader-spinner';

function App() {
  return (
    <div className="">
      <AppBar />
      <Suspense
        fallback={
          <Loader
            type="Bars"
            color="#00BFFF"
            height={50}
            width={100}
            visible={true}
          />
        }
      ></Suspense>
      <Switch>
        <PublicRoute
          path={routes.registrationView}
          restricted
          redirectTo={routes.statisticsView}
        >
          <RegistrationView />
        </PublicRoute>

        <PublicRoute
          path={routes.loginView}
          restricted
          redirectTo={routes.statisticsView}
        >
          <LoginView />
        </PublicRoute>

        <PublicRoute path={routes.errorView}>
          <ErrorView />
        </PublicRoute>
      </Switch>
    </div>
  );
}

export default App;
