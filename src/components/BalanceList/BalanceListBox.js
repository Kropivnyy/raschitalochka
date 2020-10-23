import React from 'react';
import s from './BalanceListBox.module.css';

const BalanceListBox = ({ children }) => {
  return <ul className={s.balanceListBox}>{children}</ul>;
};

export default BalanceListBox;
