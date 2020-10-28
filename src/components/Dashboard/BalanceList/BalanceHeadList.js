import React from 'react';
import s from './BalanceHeadList.module.css';

const BalanceHeadList = ({ children }) => {
  return <div className={s.balanceHeadList}>{children}</div>;
};

export default BalanceHeadList;
