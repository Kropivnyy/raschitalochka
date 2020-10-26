import React from 'react';
import Currency from '../../views/Currency';
import TotalBalance from '../TotalBalance';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import { useWindowSize } from 'react-use';
import { ReactComponent as HomeLogo } from '../../svg/home.svg';
import { ReactComponent as BaselineTimelineLogo } from '../../svg/baseline-timeline.svg';
import { ReactComponent as DollarLogo } from '../../svg/dollar.svg';

export default function Sidebar() {
  const { width } = useWindowSize();

  return (
    <>
      {width < 1280 ? (
        <div className={styles.container}>
          <NavLink
            to={routes.homePageView}
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            <HomeLogo className={styles.svgLogo} />
          </NavLink>
          <NavLink
            to={routes.statisticsView}
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            <BaselineTimelineLogo className={styles.svgLogo} />
          </NavLink>
          <NavLink
            to={routes.currencyView}
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            <DollarLogo className={styles.svgLogo} />
          </NavLink>
        </div>
      ) : (
        <>
          <div className={styles.asideBarDesktop}>
            <div className={styles.container}>
              <NavLink
                to={routes.homePageView}
                exact
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                <HomeLogo className={styles.svgLogo} />{' '}
                <span className={styles.linkText}>Home</span>
              </NavLink>
              <NavLink
                to={routes.statisticsView}
                exact
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                <BaselineTimelineLogo className={styles.svgLogo} />{' '}
                <span className={styles.linkText}>Diagram</span>
              </NavLink>
            </div>
          </div>

          <TotalBalance />

          <Currency />
        </>
      )}
    </>
  );
}
