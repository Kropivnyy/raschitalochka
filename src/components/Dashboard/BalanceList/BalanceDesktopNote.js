import React from 'react';
import s from './BalanceDesktopNote.module.css';

const BalanceDesktopNote = ({ balanceList }) => {
  const { date, type, category, comments, amount, balanceAfter } = balanceList;
  const dataInCorrectFormat = new Date(date);
  const day = ('0' + dataInCorrectFormat.getDate()).slice(-2);
  const getMonth = ('0' + dataInCorrectFormat.getMonth()).slice(-2);
  const year = dataInCorrectFormat.getFullYear().toString().substr(-2);
  const fullData = `${day}.${getMonth}.${year}`;

  return (
    <div className={s.BalanceDesktopNote}>
      <span className={s.Date}>{fullData}</span>
      <span className={s.Type}>{type}</span>
      <span className={s.Category}>{category}</span>
      <span className={s.Comments}>{comments}</span>
      <span
        style={{ color: type === '+' ? '#75c16e' : '#ff6c00' }}
        className={s.Amount}
      >
        {amount}
      </span>
      <span className={s.Balance}>{balanceAfter}</span>
    </div>
  );
};

export default BalanceDesktopNote;
