import React, { Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import PrivateRoute from './servises/PrivateRoute';
import PublicRoute from './servises/PublicRoute';
import routes from './routes';
import RegistrationView from './views/Registration';
import LoginView from './views/Login';
import DashboardView from './views/Dashboard';
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
    <>
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

        <PublicRoute path={routes.loginView}>
          <LoginView />
        </PublicRoute>

        <PublicRoute path={routes.dashboardView}>
          <DashboardView />
        </PublicRoute>
      </Switch>
    </div>
      >
        <Switch>
          <PublicRoute
            path={routes.loginView}
            restricted
            redirectTo={routes.homePageView}
            component={LoginView}
          />

          <PublicRoute
            path={routes.registrationView}
            restricted
            redirectTo={routes.homePageView}
            component={RegistrationView}
          />

          <PrivateRoute
            path={routes.statisticsView}
            redirectTo={routes.loginView}
            component={StatisticsView}
          />

          <PrivateRoute
            path={routes.currencyView}
            redirectTo={routes.loginView}
            component={CurrencyView}
          />

          <PrivateRoute
            path={routes.homePageView}
            redirectTo={routes.loginView}
            component={HomePageView}
          />

          <PublicRoute component={ErrorView} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;