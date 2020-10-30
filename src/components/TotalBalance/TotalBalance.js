import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './TotalBalance.module.css';
import financeSelectors from '../../redux/finance/finance-selectors';
import Loader from 'react-loader-spinner';

export default function TotalBalance() {
  const finance = useSelector(financeSelectors.getFinanceOperation);
  const [totalBalance, setTotalBalance] = useState(null);

  const getTotalBalance = ops => {
    if (!ops) return;
    return ops.reduce((acc, { amount, type }) => {
      acc += +`${type}${amount}`;
      return acc;
    }, 0);
  };

  useEffect(() => {
    setTotalBalance(getTotalBalance(finance));
  }, [finance]);

  return (
    <div className={styles.totalBalance}>
      <span className={styles.text}>Total Balance, UAH</span>
      {totalBalance === null ? (
        <div className={styles.loader}>
          <Loader type="Bars" color="#669668" width={20} visible={true} />
        </div>
      ) : (
        <span className={styles.text__tablet}>{totalBalance}</span>
      )}
    </div>
  );
}
