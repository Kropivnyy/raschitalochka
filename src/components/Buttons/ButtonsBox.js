import React from 'react';
import s from './ButtonsBox.module.css';

const ButtonsBox = ({ children }) => {
  return <div className={s.buttonsBox}>{children}</div>;
};

export default ButtonsBox;
