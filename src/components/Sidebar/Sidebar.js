import React from 'react';
import Currency from '../../views/Currency';
import TotalBalance from '../TotalBalance';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import Media from 'react-media';
import { ReactComponent as HomeLogo } from '../../svg/home.svg';
import { ReactComponent as BaselineTimelineLogo } from '../../svg/baseline-timeline.svg';
import { ReactComponent as DollarLogo } from '../../svg/dollar.svg';

export default function Sidebar() {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
        tablet: '(min-width: 768px) and (max-width: 1279px)',
        desktop: '(min-width: 1280px)',
      }}
    >
      {matches => (
        <>
          {matches.mobile && (
            <>
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

              <TotalBalance />
            </>
          )}
          {matches.tablet && (
            <div className={styles.container}>
              <NavLink
                to={routes.homePageView}
                exact
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                <HomeLogo className={styles.svgLogo} />
                <span className={styles.link__text}>Home</span>
              </NavLink>
              <NavLink
                to={routes.statisticsView}
                exact
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                <BaselineTimelineLogo className={styles.svgLogo} />
                <span className={styles.link__text}>Diagram</span>
              </NavLink>

              <TotalBalance />
            </div>
          )}
          {matches.desktop && (
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
      )}
    </Media>
  );
}
