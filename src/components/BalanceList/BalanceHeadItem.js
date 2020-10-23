import React from 'react';
import s from './BalanceHeadItem.module.css';

const BalanceHeadItem = () => {
  return (
    <>
      <li className={(s.balanceHeadItem, s.tableLine)}>Date</li>
      <li className={(s.balanceHeadItem, s.tableLine)}>Type</li>
      <li className={(s.balanceHeadItem, s.tableLine)}>Category</li>
      <li className={(s.balanceHeadItem, s.tableLine)}>Comments</li>
      <li className={(s.balanceHeadItem, s.tableLine)}>Amount, UAH</li>
      <li className={(s.balanceHeadItem, s.tableLine)}>Balance After</li>
    </>
  );
};

export default BalanceHeadItem;
