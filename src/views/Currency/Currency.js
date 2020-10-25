import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOps from '../../redux/auth/auth-operations';
import authSls from '../../redux/auth/auth-selectors';

import styles from './Currency.module.css';

export default function CurrencyView() {
  const dispatch = useDispatch();
  const currency = useSelector(authSls.getCurrency);

  useEffect(() => {
    dispatch(authOps.fetchCurrency());
  }, [dispatch]);

  return (
    <div className={styles.Currency__container}>
      <h2>Currency page</h2>
      <ul>
        <li key="header">
          <span>Currency</span> <span>Sale</span> <span>Purchase</span>
        </li>
        {!currency ? (
          <div>Loading...</div>
        ) : (
          currency.map(value => {
            if (value.ccy === 'BTC') return;
            return (
              <li key={value.ccy}>
                <span>{value.ccy}</span> <span>{value.sale}</span>{' '}
                <span>{value.buy}</span>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
