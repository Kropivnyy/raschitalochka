import React from 'react';
import s from './BalanceContentItem.module.css';

// const BalanceContentItem = () => {
//   return (
//     <>
//       <div className={s.balanceContentItem}>07.01.19</div>
//       <div className={s.balanceContentItem}>+</div>
//       <div className={s.balanceContentItem}>Irregular Income</div>
//       <div className={s.balanceContentItem}>Cash</div>
//       <div className={s.balanceContentItem}>1 000.00</div>
//       <div className={s.balanceContentItem}>14 870.00</div>
//     </>
//   );
// };

const BalanceContentItem = ({ balanceList }) => {
  const { date, type, category, comments, amount, balanceAfter } = balanceList;

  const dataInCorrectFormat = new Date(date);
  const day = ('0' + dataInCorrectFormat.getDate()).slice(-2);
  const getMonth = ('0' + dataInCorrectFormat.getMonth()).slice(-2);
  const year = dataInCorrectFormat.getFullYear().toString().substr(-2);
  const fullData = `${day}.${getMonth}.${year}`;
  return (
    <>
      <div className={s.balanceContentItem}>{fullData}</div>
      <div className={s.balanceContentItem}>{type}</div>
      <div className={s.balanceContentItem}>{category}</div>
      <div className={s.balanceContentItem}>{comments}</div>
      <div className={s.balanceContentItem}>{amount}</div>
      <div className={s.balanceContentItem}>{balanceAfter}</div>
    </>
  );
};

export default BalanceContentItem;
