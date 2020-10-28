import React from 'react';
import s from './BalanceMobileNoteString.module.css';

const BalanceMobileNoteString = ({ text, value }) => {
  return (
    <li className={s.BalanceMobileNoteString}>
      <div className={s.Heading}>{text}</div>
      <div className={s.Value}>{value}</div>
    </li>
  );
};

export default BalanceMobileNoteString;
