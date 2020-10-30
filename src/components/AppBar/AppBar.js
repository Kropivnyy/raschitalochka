import React from 'react';

import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation';
import styles from './AppBar.module.css';
import { ReactComponent as ReactLogo } from '../../svg/logo.svg';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getAuthenticated);

  return (
    <div className={styles.AppBar__container}>
      <div className={styles.AppBar}>
        <div className={styles.logo__container}>
          <NavLink to={routes.homePageView} exact className={styles.link}>
            <ReactLogo className={styles.logoSvg} />
            <Media
              queries={{
                tablet: '(min-width: 768px)',
              }}
            >
              {matches => (
                <>
                  {matches.tablet && (
                    <h1 className={styles.logoTitle}>Raschitalochka</h1>
                  )}
                </>
              )}
            </Media>
          </NavLink>
        </div>
        {isLoggedIn && <Navigation />}
      </div>
    </div>
  );
}
