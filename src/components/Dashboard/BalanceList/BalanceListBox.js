import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { financeSelectors, financeOperations } from '../../../redux/finance';
import Media from 'react-media';
import BalanceMobileNote from './BalanceMobileNote';
import BalanceDesktopHead from './BalanceDesktopHead';
import BalanceDesktopNote from './BalanceDesktopNote';
import ButtonsBox from '../Buttons/ButtonsBox';
import s from './BalanceListBox.module.css';

const BalanceListBox = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(financeSelectors.getFinanceOperation);

  useEffect(() => {
    dispatch(financeOperations.getOperationsById());
  }, [dispatch]);

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
                {transactions.length > 0 ? (
                  <>
                    {transactions.map(balanceList => {
                      return (
                        <BalanceMobileNote
                          key={balanceList._id}
                          balanceList={balanceList}
                        />
                      );
                    })}
                  </>
                ) : (
                  <div className={s.Fallback}>
                    You have not made any transactions
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className={s.balanceListBox}>
                <ButtonsBox />
                {transactions.length > 0 ? (
                  <>
                    <BalanceDesktopHead />
                    {transactions.map(balanceList => {
                      return (
                        <BalanceDesktopNote
                          key={balanceList._id}
                          balanceList={balanceList}
                        />
                      );
                    })}
                  </>
                ) : (
                  <div className={s.Fallback}>
                    You have not made any transactions
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </Media>
  );
};

export default BalanceListBox;
