import React from 'react';
import s from './Cover.module.css';

const Cover = ({ children }) => {
  return <div className={s.cover}>{children}</div>;
};

export default Cover;
