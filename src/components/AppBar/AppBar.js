import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation';
import styles from './AppBar.module.css';
import { ReactComponent as ReactLogo } from '../../svg/logo.svg';
import { useWindowSize } from 'react-use';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getAuthenticated);
  const { width } = useWindowSize();

  return (
    <div className={styles.AppBar__container}>
      <div className={styles.AppBar}>
        <div className={styles.logo__container}>
          <ReactLogo className={styles.logoSvg} />
          {width >= 1280 && (
            <h1 className={styles.logoTitle}>Raschitalochka</h1>
          )}
        </div>
        {isLoggedIn && <Navigation />}
      </div>
    </div>
  );
}
