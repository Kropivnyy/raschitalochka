import React from 'react';
import s from './MainButton.module.css';

const MainButton = ({ text }) => {
  return <button className={s.btn}>{text}</button>;
};

export default MainButton;
