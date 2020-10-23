import React from 'react';
import s from './BalanceContentList.module.css';

const BalanceContentList = ({ children }) => {
  return <ul className={s.balanceContentList}>{children}</ul>;
};

export default BalanceContentList;
