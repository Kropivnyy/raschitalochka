import React from 'react';
import { costCategories, incomeCategories } from '../../../categories';
import BalanceMobileNoteString from './BalanceMobileNoteString';
import s from './BalanceMobileNote.module.css';

const BalanceMobileNote = ({ balanceList }) => {
  const {
    date,
    type,
    category,
    comments,
    amount,
    balanceAfter,
    typeBalanceAfter,
  } = balanceList;
  const dataInCorrectFormat = new Date(date);
  const day = ('0' + dataInCorrectFormat.getDate()).slice(-2);
  const month = ('0' + (dataInCorrectFormat.getMonth() + 1)).slice(-2);
  const year = dataInCorrectFormat.getFullYear().toString().substr(-2);
  const fullData = `${day}.${month}.${year}`;
  const categoryText = () =>
    (type === '+'
      ? incomeCategories.find(cat => cat.value === category)?.text
      : costCategories.find(cat => cat.value === category)?.text) ||
    'Outdated category';

  return (
    <ul className={s.BalanceMobileNote}>
      <BalanceMobileNoteString text="Date" value={fullData} />
      <BalanceMobileNoteString text="Type" value={type} />
      <BalanceMobileNoteString text="Category" value={categoryText()} />
      <BalanceMobileNoteString text="Comments" value={comments || '-/-'} />
      <BalanceMobileNoteString
        text="Amount, UAH"
        color={type === '+' ? '#75c16e' : '#ff6c00'}
        value={amount}
      />
      <BalanceMobileNoteString
        style={{ color: typeBalanceAfter === '+' && 'red' }}
        text="Balance after"
        value={balanceAfter}
        negativeBalance={typeBalanceAfter === '-'}
      />
    </ul>
  );
};

export default BalanceMobileNote;
