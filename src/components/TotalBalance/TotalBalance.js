import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './TotalBalance.module.css';
import userOperations from '../../redux/user/user-operations';
import userSelectors from '../../redux/user/user-selectors';
import authSelectors from '../../redux/auth/auth-selectors';
import Loader from 'react-loader-spinner';

export default function TotalBalance() {
  const dispatch = useDispatch();
  const totalBalance = useSelector(userSelectors.getTotalBalance);
  const userId = useSelector(authSelectors.getUserId);

  useEffect(() => {
    dispatch(userOperations.fetchTotalBalance(userId));
  }, [dispatch, userId]);

  return (
    <div className={styles.totalBalance}>
      <span className={styles.text}>Total Balance, UAH</span>
      {totalBalance === null ? (
        <div className={styles.loader}>
          <Loader type="Bars" color="#fff" width={20} visible={true} />
        </div>
      ) : (
        <span className={styles.text__tablet}>{totalBalance}</span>
      )}
    </div>
  );
}
