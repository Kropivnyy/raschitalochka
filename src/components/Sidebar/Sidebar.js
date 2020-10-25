import React from 'react';
import Currency from '../../views/Currency';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

export default function Sidebar() {
  return (
    <>
      <div className={styles.mb}>
        <NavLink
          to={routes.homePageView}
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home page
        </NavLink>
        <NavLink
          to={routes.statisticsView}
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Diagram
        </NavLink>
      </div>

      <div className={styles.mb}>Total Balance, UAH 24 000.00</div>

      <Currency />
    </>
  );
}
