import React from 'react';
import { costCategories, incomeCategories } from '../../../categories';
import s from './BalanceDesktopNote.module.css';

const BalanceDesktopNote = ({ balanceList }) => {
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
    <div className={s.BalanceDesktopNote}>
      <span className={s.Date}>{fullData}</span>
      <span className={s.Type}>{type}</span>
      <span className={s.Category}> {categoryText()} </span>
      <span className={s.Comments}>{comments || '-/-'}</span>
      <span
        style={{ color: type === '+' ? '#75c16e' : '#ff6c00' }}
        className={s.Amount}
      >
        {amount}
      </span>
      <span
        style={{ color: typeBalanceAfter === '-' && 'red' }}
        className={s.Balance}
      >
        {balanceAfter}
      </span>
    </div>
  );
};

export default BalanceDesktopNote;
