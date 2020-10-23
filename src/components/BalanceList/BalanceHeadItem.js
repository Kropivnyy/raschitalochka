import React from 'react';
import s from './BalanceHeadItem.module.css';

const BalanceHeadItem = () => {
  return (
    <>
      <li className={s.balanceHeadItem}>Date</li>
      <li className={s.balanceHeadItem}>Type</li>
      <li className={s.balanceHeadItem}>Category</li>
      <li className={s.balanceHeadItem}>Comments</li>
      <li className={s.balanceHeadItem}>Amount, UAH</li>
      <li className={s.balanceHeadItem}>Balance After</li>
    </>
  );
};

export default BalanceHeadItem;
