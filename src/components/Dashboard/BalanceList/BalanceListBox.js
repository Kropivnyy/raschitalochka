import React from 'react';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../../redux/transactions';
import Media from 'react-media';
import BalanceMobileNote from './BalanceMobileNote';
import BalanceDesktopHead from './BalanceDesktopHead';
import BalanceDesktopNote from './BalanceDesktopNote';
import ButtonsBox from '../Buttons/ButtonsBox';
import s from './BalanceListBox.module.css';

const BalanceListBox = () => {
  const transactions = useSelector(transactionsSelectors.getTransactions);
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
      }}
    >
      {matches => (
        <>
          {matches.mobile ? (
            <>
              <div className={s.balanceListBox}>
                <ButtonsBox />
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
          ) : (
            <>
              <div className={s.balanceListBox}>
                <ButtonsBox />
                <BalanceDesktopHead />
                {transactions.map(balanceList => {
                  return (
                    <BalanceDesktopNote
                      key={balanceList._id}
                      balanceList={balanceList}
                    />
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
    </Media>
  );
};

export default BalanceListBox;
