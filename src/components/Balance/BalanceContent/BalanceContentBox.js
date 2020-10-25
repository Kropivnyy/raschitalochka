import React from 'react';
import s from './BalanceContentBox.module.css';

const BalanceContentBox = ({ children }) => {
  return <div className={s.balanceContentBox}>{children}</div>;
};

export default BalanceContentBox;
