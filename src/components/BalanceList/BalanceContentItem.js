import React from 'react';
import s from './BalanceContentItem.module.css';

const BalanceContentItem = () => {
  return (
    <>
      <li className={s.balanceContentItem}>07.01.19</li>
      <li className={s.balanceContentItem}>+</li>
      <li className={s.balanceContentItem}>Irregular Income</li>
      <li className={s.balanceContentItem}>Cash</li>
      <li className={s.balanceContentItem}>1 000.00</li>
      <li className={s.balanceContentItem}>14 870.00</li>
    </>
  );
};

export default BalanceContentItem;
