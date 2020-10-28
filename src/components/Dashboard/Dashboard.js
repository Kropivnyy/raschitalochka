import React from 'react';
import Media from 'react-media';
import BalanceListBox from './BalanceList/BalanceListBox';

const DashboardView = () => {
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

export default DashboardView;
