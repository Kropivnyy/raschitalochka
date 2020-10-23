import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
// import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';
import UserMenu from '../UserMenu';
import Wrapper from '../Wrapper';

export default function Navigation() {
  //
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
      {isLoggedIn && (
        <>
    <nav className={styles.Navigation__container}>
      <>
        <Wrapper>
          <UserMenu />
          <NavLink
            to={routes.homePageView}
            exact
            className={styles.linc}
            activeClassName=""
          >
            Home page
          </NavLink>
          <NavLink
            to={routes.statisticsView}
            exact
            className={styles.linc}
            activeClassName="NavLink--active"
          >
            Statistics
          </NavLink>
          <NavLink
            to={routes.currencyView}
            exact
            className={styles.linc}
            activeClassName="NavLink--active"
          >
            Currency
          </NavLink>
          <NavLink
            to={routes.dashboardView}
            exact
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Dashboard
          </NavLink>
        </>
      )}
        </Wrapper>
      </>
    </nav>
  );
}
