import React from 'react';
import s from './BalanceHead.module.css';

const BalanceHead = ({ children }) => {
  return <div className={s.balanceHead}>{children}</div>;
};

export default BalanceHead;
