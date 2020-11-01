import React from 'react';
import s from './BalanceMobileNoteString.module.css';

const BalanceMobileNoteString = ({ text, color, value, negativeBalance }) => {
  return (
    <li className={s.BalanceMobileNoteString}>
      <div className={s.Heading}>{text}</div>
      <div
        style={{ color: color || (negativeBalance && 'red') }}
        className={s.Value}
      >
        {value}
      </div>
    </li>
  );
};

export default BalanceMobileNoteString;
