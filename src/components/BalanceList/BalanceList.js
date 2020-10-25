import React from 'react';
import s from './BalanceList.module.css';

const BalanceList = ({ children }) => {
  return <div className={s.balanceList}>{children}</div>;
};

export default BalanceList;
