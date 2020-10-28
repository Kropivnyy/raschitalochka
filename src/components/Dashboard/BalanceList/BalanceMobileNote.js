import React from 'react';
import BalanceMobileNoteString from './BalanceMobileNoteString';
import s from './BalanceMobileNote.module.css';

const BalanceMobileNote = ({ balanceList }) => {
  const { date, type, category, comments, amount, balanceAfter } = balanceList;
  const dataInCorrectFormat = new Date(date);
  const day = ('0' + dataInCorrectFormat.getDate()).slice(-2);
  const getMonth = ('0' + dataInCorrectFormat.getMonth()).slice(-2);
  const year = dataInCorrectFormat.getFullYear().toString().substr(-2);
  const fullData = `${day}.${getMonth}.${year}`;

  return (
    <ul className={s.BalanceMobileNote}>
      <BalanceMobileNoteString text="Date" value={fullData} />
      <BalanceMobileNoteString text="Type" value={type} />
      <BalanceMobileNoteString text="Category" value={category} />
      <BalanceMobileNoteString text="Comments" value={comments} />
      <BalanceMobileNoteString
        text="Amount, UAH"
        color={type === '+' ? '#75c16e' : '#ff6c00'}
        value={amount}
      />
      <BalanceMobileNoteString text="Balance after" value={balanceAfter} />
    </ul>
  );
};

export default BalanceMobileNote;
