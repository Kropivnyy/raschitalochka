import React from 'react';
import s from './BalanceContentItem.module.css';

const BalanceContentItem = () => {
  return (
    <>
      <li className={(s.balanceContentItem, s.tableLine)}>07.01.19</li>
      <li className={(s.balanceContentItem, s.tableLine)}>+</li>
      <li className={(s.balanceContentItem, s.tableLine)}>Irregular Income</li>
      <li className={(s.balanceContentItem, s.tableLine)}>Cash</li>
      <li className={(s.balanceContentItem, s.tableLine)}>1 000.00</li>
      <li className={(s.balanceContentItem, s.tableLine)}>14 870.00</li>
    </>
  );
};

export default BalanceContentItem;
