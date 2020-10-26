import React from 'react';

import styles from './HomePage.module.css';
import Dashboard from '../../components/Dashboard';

export default function HomePage() {
  return (
    <div className={styles.HomePage__container}>
      {/* <h2>Home page</h2> */}
      <Dashboard />
    </div>
  );
}
