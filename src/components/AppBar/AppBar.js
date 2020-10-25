import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getAuthenticated);
  return (
    <div className={styles.AppBar__container}>
      {isLoggedIn && <Navigation />}
    </div>
  );
}
