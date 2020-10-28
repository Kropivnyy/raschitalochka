import React from 'react';
import { useSelector } from 'react-redux';
import s from './BalanceContentItem.module.css';

import { transactionsSelectors } from '../../../redux/transactions';

const BalanceContentItem = ({ balanceList }) => {
  const { date, type, category, comments, amount, balanceAfter } = balanceList;

  const dataInCorrectFormat = new Date(date);
  const day = ('0' + dataInCorrectFormat.getDate()).slice(-2);
  const getMonth = ('0' + dataInCorrectFormat.getMonth()).slice(-2);
  const year = dataInCorrectFormat.getFullYear().toString().substr(-2);
  const fullData = `${day}.${getMonth}.${year}`;

  const transactions = useSelector(transactionsSelectors.getTransactions);

  let classNameForTransaction;

  transactions.map(transaction => {
    if (!transaction.type) return (classNameForTransaction = null);

    classNameForTransaction =
      transaction.type === '+' ? `${s.plusColor}` : `${s.minusColor}`;

    console.log(111, classNameForTransaction);
    return classNameForTransaction;
  });

  return (
    <>
      <div className={s.balanceContentItem}>{fullData}</div>
      <div className={s.balanceContentItem}>{type}</div>
      <div className={s.balanceContentItem}>{category}</div>
      <div className={s.balanceContentItem}>{comments}</div>
      <div className={`${s.balanceContentItem} ${classNameForTransaction}`}>
        {amount}
      </div>
      <div className={s.balanceContentItem}>{balanceAfter}</div>
    </>
  );
};

export default BalanceContentItem;
