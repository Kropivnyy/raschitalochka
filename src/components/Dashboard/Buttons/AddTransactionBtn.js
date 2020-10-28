import React from 'react';
import s from './AddTransactionBtn.module.css';

const AddTransactionBtn = ({ onClick, type }) => {
  const openModal = () => {
    onClick(type);
  };
  return (
    <button onClick={openModal} className={s.AddTransactionBtn}>
      Add {type}
    </button>
  );
};

export default AddTransactionBtn;
