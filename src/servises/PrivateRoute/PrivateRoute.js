import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import MainLayout from '../../layouts/MainLayout';

export default function PrivateRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isLoggedIn ? (
          <MainLayout>
            <Component {...props} />
          </MainLayout>
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    ></Route>
  );
}
