import React from 'react';
import { useSelector } from 'react-redux';
import s from './BalanceList.module.css';
import { transactionsSelectors } from '../../../redux/transactions/';

import BalanceContentList from './BalanceContentList';
import BalanceContentItem from './BalanceContentItem';

// ----------------------

import dataBase from '../../../db.json';

// ----------------------

const BalanceList = () => {
  const transactions = useSelector(transactionsSelectors.getTransactions);
  return (
    <div className={s.balanceList}>
      {transactions.map(balanceList => {
        return (
          <BalanceContentList key={balanceList._id}>
            <BalanceContentItem balanceList={balanceList} />
          </BalanceContentList>
        );
      })}
    </div>
  );
};

// const BalanceList = ({ children }) => {
//   return <div className={s.balanceList}>{children}</div>;
// };

export default BalanceList;
