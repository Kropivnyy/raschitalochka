import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation';
import styles from './AppBar.module.css';
import { ReactComponent as ReactLogo } from '../../svg/logo.svg';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getAuthenticated);
  return (
    <div className={styles.AppBar__container}>
      <div className={styles.AppBar}>
        <ReactLogo className={styles.logo} />
        {isLoggedIn && <Navigation />}
      </div>
    </div>
  );
}
