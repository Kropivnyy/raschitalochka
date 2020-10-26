import React from 'react';
import s from './BalanceContent.module.css';

const BalanceContent = () => {
  return (
    <>
      <div className={s.balanceTotalHead}>Total Balance, UAH</div>
      <div>24 000.00</div>
    </>
  );
};

export default BalanceContent;
