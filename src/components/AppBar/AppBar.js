import React from 'react';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import styles from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getAuthenticated);
  return (
    <header className={styles.AppBar__container}>
      {isLoggedIn ? <Navigation /> : <AuthNav />}
    </header>
  );
}
