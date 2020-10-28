import React from 'react';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../../redux/transactions';
import BalanceMobileNoteString from './BalanceMobileNoteString';
import s from './BalanceMobileNote.module.css';

const BalanceMobileNote = ({ balanceList }) => {
  const { date, type, category, comments, amount, balanceAfter } = balanceList;
  console.log(balanceList);
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

    // console.log(111, classNameForTransaction);
    return classNameForTransaction;
  });

  return (
    <ul className={s.BalanceMobileNote}>
      <BalanceMobileNoteString text="Date" value={fullData} />
      <BalanceMobileNoteString text="Type" value={type} />
      <BalanceMobileNoteString text="Category" value={category} />
      <BalanceMobileNoteString text="Comments" value={comments} />
      <BalanceMobileNoteString text="Amount, UAH" value={amount} />
      <BalanceMobileNoteString text="Balance after" value={balanceAfter} />
    </ul>
  );
};

export default BalanceMobileNote;
