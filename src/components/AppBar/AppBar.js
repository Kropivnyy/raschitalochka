import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation';
import styles from './AppBar.module.css';
import { ReactComponent as ReactLogo } from '../../svg/logo.svg';
import Media from 'react-media';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getAuthenticated);

  return (
    <div className={styles.AppBar__container}>
      <div className={styles.AppBar}>
        <div className={styles.logo__container}>
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
        </div>
        {isLoggedIn && <Navigation />}
      </div>
    </div>
  );
}
