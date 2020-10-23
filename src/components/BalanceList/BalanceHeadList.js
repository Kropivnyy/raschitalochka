import React from 'react';
import s from './BalanceHeadList.module.css';

const BalanceHeadList = ({ children }) => {
  return <ul className={s.balanceHeadList}>{children}</ul>;
};

export default BalanceHeadList;
