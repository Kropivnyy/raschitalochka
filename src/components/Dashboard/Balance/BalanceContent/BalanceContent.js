import React from 'react';
import s from './BalanceContent.module.css';

const BalanceContent = ({ actualBalance }) => {
  return (
    <>
      <div className={s.balanceTotalHead}>Total Balance, UAH</div>
      <div>{actualBalance}</div>
    </>
  );
};

export default BalanceContent;
