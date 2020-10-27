import React from 'react';
import s from './BalanceContentList.module.css';

const BalanceContentList = ({ children }) => {
  return <div className={s.balanceContentList}>{children}</div>;
};

export default BalanceContentList;
