import React from 'react';
import s from './BalanceHeadItem.module.css';

const BalanceHeadItem = () => {
  return (
    <>
      <div className={s.balanceHeadItem}>Date</div>
      <div className={s.balanceHeadItem}>Type</div>
      <div className={s.balanceHeadItem}>Category</div>
      <div className={s.balanceHeadItem}>Comments</div>
      <div className={s.balanceHeadItem}>Amount, UAH</div>
      <div className={s.balanceHeadItem}>Balance After</div>
    </>
  );
};

export default BalanceHeadItem;
