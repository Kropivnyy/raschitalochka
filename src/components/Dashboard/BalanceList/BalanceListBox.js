import React from 'react';
import s from './BalanceListBox.module.css';

const BalanceListBox = ({ children }) => {
  return <div className={s.balanceListBox}>{children}</div>;
};

export default BalanceListBox;
