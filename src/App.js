import React, { Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import AppBar from './components/AppBar';
import PrivateRoute from './servises/PrivateRoute';
import PublicRoute from './servises/PublicRoute';
import routes from './routes';
import RegistrationView from './views/Registration';
import LoginView from './views/Login';
import StatisticsView from './views/Statistics';
import CurrencyView from './views/Currency';
import HomePageView from './views/HomePage';
import ErrorView from './views/Error';
import Loader from 'react-loader-spinner';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getTokenFromLS());
  }, [dispatch]);
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
          path={routes.loginView}
          restricted
          redirectTo={routes.statisticsView}
        >
          <LoginView />
        </PublicRoute>

        <PublicRoute
          path={routes.registrationView}
          restricted
          redirectTo={routes.statisticsView}
        >
          <RegistrationView />
        </PublicRoute>

        <PrivateRoute
          path={routes.statisticsView}
          restricted
          redirectTo={routes.loginView}
        >
          <StatisticsView />
        </PrivateRoute>

        <PrivateRoute
          path={routes.currencyView}
          restricted
          redirectTo={routes.loginView}
        >
          <CurrencyView />
        </PrivateRoute>

        <PrivateRoute
          path={routes.homePageView}
          restricted
          redirectTo={routes.loginView}
        >
          <HomePageView />
        </PrivateRoute>

        <PublicRoute>
          <ErrorView />
        </PublicRoute>
      </Switch>
    </div>
  );
}

export default App;
