import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { financeSelectors, financeOperations } from '../../redux/finance';
import Media from 'react-media';
import BalanceMobileNote from './BalanceList/BalanceMobileNote';
import BalanceDesktopHead from './BalanceList/BalanceDesktopHead';
import BalanceDesktopNote from './BalanceList/BalanceDesktopNote';
import ButtonsBox from './Buttons/ButtonsBox';
import s from './Dashboard.module.css';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(financeOperations.getOperationsById());
  }, [dispatch]);

  const finance = useSelector(financeSelectors.getFinanceOperation);
  const transactions = finance.data;

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
              <div className={s.Dashboard}>
                <ButtonsBox />
                {transactions?.length > 0 ? (
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
              <div className={s.Dashboard}>
                <ButtonsBox />
                {transactions?.length > 0 ? (
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

export default Dashboard;
