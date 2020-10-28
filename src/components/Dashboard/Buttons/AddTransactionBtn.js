import React from 'react';
import s from './AddTransactionBtn.module.css';

const AddTransactionBtn = ({ text }) => {
  return <button className={s.AddTransactionBtn}>{text}</button>;
};

export default AddTransactionBtn;
