import React from 'react';

import styles from './HomePage.module.css';
import Dashboard from '../../components/Dashboard';
import Currency from '../Currency';

import Media from 'react-media';

export default function HomePage() {
  return (
    <div className={styles.HomePage__container}>
      {/* <h2>Home page</h2> */}
      <Dashboard />
      <Media
        queries={{
          tablet: '(min-width: 768px) and (max-width: 1279px)',
        }}
      >
        {matches => <>{matches.tablet && <Currency />}</>}
      </Media>
    </div>
  );
}
