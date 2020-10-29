import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import currencyOperations from '../../redux/currency/currency-operations';
import currencySelectors from '../../redux/currency/currency-selectors';
import Loader from 'react-loader-spinner';

import styles from './Currency.module.css';

export default function CurrencyView() {
  const dispatch = useDispatch();
  const currency = useSelector(currencySelectors.getCurrency);

  useEffect(() => {
    dispatch(currencyOperations.fetchCurrency());
  }, [dispatch]);

  const minimizeValue = value => {
    if (!value) return;
    const number = (Math.round(value * 100) / 100).toString();
    if (!number.split('.')[1]) return number + '.00';
    if (number.split('.')[1].length === 1) return number + '0';
    return number;
  };

  return (
    <div className={styles.Currency__container}>
      <ul>
        <li key="header" className={styles.title}>
          <span>Currency</span> <span>Sale</span> <span>Purchase</span>
        </li>
        {!currency ? (
          <div className={styles.loader}>
            <Loader type="Bars" color="#3f5544" width={40} visible={true} />
          </div>
        ) : (
          currency.map(value => {
            if (value.ccy === 'BTC') return null;
            return (
              <li key={value.ccy} className={styles.list}>
                <span>{value.ccy}</span>{' '}
                <span>{minimizeValue(value.sale)}</span>{' '}
                <span>{minimizeValue(value.buy)}</span>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
