import React from 'react';
import s from './BalanceContentItem.module.css';

const BalanceContentItem = () => {
  return (
    <>
      <div className={s.balanceContentItem}>07.01.19</div>
      <div className={s.balanceContentItem}>+</div>
      <div className={s.balanceContentItem}>Irregular Income</div>
      <div className={s.balanceContentItem}>Cash</div>
      <div className={s.balanceContentItem}>1 000.00</div>
      <div className={s.balanceContentItem}>14 870.00</div>
    </>
  );
};

export default BalanceContentItem;
