import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AuthLayout from '../../layouts/AuthLayout';

export default function PublicRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isLoggedIn && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <AuthLayout>
            <Component {...props} />
          </AuthLayout>
        )
      }
    ></Route>
  );
}
