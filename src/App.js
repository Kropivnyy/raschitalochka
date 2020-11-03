import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import PrivateRoute from './servises/PrivateRoute';
import PublicRoute from './servises/PublicRoute';
import routes from './routes';
import Loader from 'react-loader-spinner';

const RegistrationView = lazy(() =>
  import('./views/Registration' /* webpackChunkName: "registration-page" */),
);
const LoginView = lazy(() =>
  import('./views/Login' /* webpackChunkName: "login-page" */),
);
const StatisticsView = lazy(() =>
  import('./views/Statistics' /* webpackChunkName: "statistics-page" */),
);
const CurrencyView = lazy(() =>
  import('./views/Currency' /* webpackChunkName: "currency-page" */),
);
const HomePageView = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page-page" */),
);
const ErrorView = lazy(() =>
  import('./views/Error' /* webpackChunkName: "error-page" */),
);

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
            color="#516d57"
            height={50}
            width={100}
            visible={true}
          />
        }
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
