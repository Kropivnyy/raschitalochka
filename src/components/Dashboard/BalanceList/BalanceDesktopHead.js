import React from 'react';
import s from './BalanceDesktopHead.module.css';

const BalanceDesktopHead = () => {
  return (
    <div className={s.BalanceDesktopHead}>
      <span className={s.Date}>Date</span>
      <span className={s.Type}>Type</span>
      <span className={s.Category}>Category</span>
      <span className={s.Comments}>Comments</span>
      <span className={s.Amount}>Amount, UAH</span>
      <span className={s.Balance}>Balance after</span>
    </div>
  );
};

export default BalanceDesktopHead;
