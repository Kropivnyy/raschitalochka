import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

export default function Navigation() {
  return (
    <nav className="">
      <NavLink to={routes.homePageView} exact className="" activeClassName="">
        Home page
      </NavLink>

      <NavLink
        to={routes.loginView}
        exact
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Login
      </NavLink>

      <NavLink
        to={routes.registrationView}
        exact
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Registration
      </NavLink>

      <NavLink
        to={routes.statisticsView}
        exact
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Statistics
      </NavLink>
      <NavLink
        to={routes.currencyView}
        exact
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Currency
      </NavLink>
    </nav>
  );
}
