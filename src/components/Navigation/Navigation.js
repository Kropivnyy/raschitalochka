import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
// import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';
import UserMenu from '../UserMenu';
import Wrapper from '../Wrapper';

export default function Navigation() {
  return (
    <nav className={styles.Navigation__container}>
      <>
        <Wrapper>
          <UserMenu />
          <NavLink
            to={routes.homePageView}
            exact
            className={styles.link}
            activeClassName=""
          >
            Home page
          </NavLink>
          <NavLink
            to={routes.statisticsView}
            exact
            className={styles.link}
            activeClassName="NavLink--active"
          >
            Statistics
          </NavLink>
          <NavLink
            to={routes.currencyView}
            exact
            className={styles.link}
            activeClassName="NavLink--active"
          >
            Currency
          </NavLink>
        </Wrapper>
      </>
    </nav>
  );
}
