import React from 'react';
import { useDispatch } from 'react-redux';
import { transactionsOperations } from '../../redux/transactions';
import Media from 'react-media';
import BalanceListBox from './BalanceList/BalanceListBox';
import TotalBalance from '../TotalBalance';

const Dashboard = () => {
  // TODO: need to get form redux store
  const userId = '5f9726599043240c96228703';
  const dispatch = useDispatch();
  dispatch(transactionsOperations.getTransactions(userId));

  return (
    <>
      <Media
        queries={{
          mobile: '(max-width: 767px)',
        }}
      >
        {matches => (
          <>
            {matches.mobile ? (
              <>
                <TotalBalance />
                <BalanceListBox />
              </>
            ) : (
              <>
                <BalanceListBox />
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default Dashboard;
