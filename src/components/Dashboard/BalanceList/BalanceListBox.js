import React from 'react';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../../redux/transactions';
import Media from 'react-media';
import BalanceMobileNote from './BalanceMobileNote';
import s from './BalanceListBox.module.css';

const BalanceListBox = () => {
  const transactions = useSelector(transactionsSelectors.getTransactions);
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
        tablet: '(min-width: 768px) and (max-width: 1279px)',
        desktop: '(min-width: 1280px)',
      }}
    >
      {matches =>
        matches.mobile && (
          <>
            <div className={s.balanceListBox}>
              {transactions.map(balanceList => {
                return (
                  <BalanceMobileNote
                    key={balanceList._id}
                    balanceList={balanceList}
                  />
                );
              })}
            </div>
          </>
        )
      }
    </Media>
  );
};

export default BalanceListBox;
