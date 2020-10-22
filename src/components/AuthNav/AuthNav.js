import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './AuthNav.scss';

const AuthNav = () => {
  return (
    <nav className="Navigation">
      <NavLink
        to={routes.registerView}
        exact
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Registraton
      </NavLink>
      <NavLink
        to={routes.loginView}
        exact
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
