import { func } from 'prop-types';
import React from 'react';
import styles from './TotalBalance.module.css';

export default function TotalBalance() {
  return (
    <div className={styles.totalBalance}>
      <span className={styles.text}>Total Balance, UAH</span>
      <span className={styles.text}>24 000.00</span>
    </div>
  );
}
