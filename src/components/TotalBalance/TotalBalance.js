import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './TotalBalance.module.css';
import userOperations from '../../redux/user/user-operations';
import userSelectors from '../../redux/user/user-selectors';

export default function TotalBalance() {
  const dispatch = useDispatch();
  const totalBalance = useSelector(userSelectors.getTotalBalance);

  useEffect(() => {
    dispatch(userOperations.fetchTotalBalance('5f987d3d9043240c96228730'));
  }, [dispatch]);

  return (
    <div className={styles.totalBalance}>
      <span className={styles.text}>Total Balance, UAH</span>
      {!totalBalance ? (
        <div>Loading...</div>
      ) : (
        <span className={styles.text__tablet}>{totalBalance}</span>
      )}
    </div>
  );
}
