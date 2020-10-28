import React from 'react';
import { useSelector } from 'react-redux';
import s from './BalanceContent.module.css';

import { transactionsSelectors } from '../../../../redux/transactions';

const BalanceContent = () => {
  const transactions = useSelector(transactionsSelectors.getTransactions);

  let lastActualBalance;

  if (transactions.length === 0) return (lastActualBalance = []);
  lastActualBalance = transactions[transactions.length - 1].balanceAfter;

  return (
    <>
      {lastActualBalance !== [] ? (
        <>
          <div className={s.balanceTotalHead}>Total Balance, UAH</div>
          <div>{lastActualBalance}</div>
        </>
      ) : null}
    </>
  );
};

export default BalanceContent;
