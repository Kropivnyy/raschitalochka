import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AuthNav.module.css';
const AuthNav = () => {
  return (
    <nav className={styles.AuthNav__container}>
      <NavLink
        to={routes.registrationView}
        exact
        className={styles.linc}
        activeClassName="NavLink--active"
      >
        Registraton
      </NavLink>
      <NavLink
        to={routes.loginView}
        exact
        className={styles.linc}
        activeClassName="NavLink--active"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
