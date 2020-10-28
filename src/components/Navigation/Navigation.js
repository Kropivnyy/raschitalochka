import React from 'react';
import styles from './Navigation.module.css';
import UserMenu from '../UserMenu';

export default function Navigation() {
  return (
    <nav className={styles.Navigation__container}>
      <UserMenu />
    </nav>
  );
}
