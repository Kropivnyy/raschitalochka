import React from 'react';
import s from './BalanceList.module.css';

const BalanceList = ({ children }) => {
  return <li className={s.balanceList}>{children}</li>;
};

export default BalanceList;
