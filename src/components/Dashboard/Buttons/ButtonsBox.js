import React from 'react';
import AddTransactionBtn from './AddTransactionBtn';
import s from './ButtonsBox.module.css';

const ButtonsBox = () => {
  return (
    <div className={s.buttonsBox}>
      <AddTransactionBtn text="Add Income" />
      <AddTransactionBtn text="Add Cost" />
    </div>
  );
};

export default ButtonsBox;
