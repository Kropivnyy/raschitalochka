import React from 'react';
import { useSelector } from 'react-redux';
import s from './BalanceList.module.css';
import nextId from 'react-id-generator';
import { transactionsSelectors } from '../../../redux/transactions/';

import BalanceContentList from './BalanceContentList';
import BalanceContentItem from './BalanceContentItem';

import BalanceHeadList from '../BalanceList/BalanceHeadList';
import BalanceHeadItem from '../BalanceList/BalanceHeadItem';
import Media from 'react-media';

const BalanceList = () => {
  const transactions = useSelector(transactionsSelectors.getTransactions);
  return (
    <Media queries={{ big: '(min-width: 700px)' }}>
      {matches =>
        matches.big ? (
          <>
            <div className={s.balanceList}>
              {transactions.map(balanceList => {
                return (
                  <>
                    <BalanceHeadList>
                      <BalanceHeadItem />
                    </BalanceHeadList>
                    <BalanceContentList key={balanceList._id}>
                      <BalanceContentItem balanceList={balanceList} />
                    </BalanceContentList>
                  </>
                );
              })}
            </div>
          </>
        ) : (
          <>
            {transactions.map(balanceList => {
              return (
                <>
                  <div className={s.balanceList}>
                    <div className={s.balanceTable}>
                      <BalanceHeadList>
                        <BalanceHeadItem />
                      </BalanceHeadList>
                      <BalanceContentList key={balanceList._id}>
                        <BalanceContentItem balanceList={balanceList} />
                      </BalanceContentList>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )
      }
    </Media>
  );
};

// const BalanceList = () => {
//   const transactions = useSelector(transactionsSelectors.getTransactions);
//   return (
//     <div className={s.balanceList}>
//       <BalanceHeadList>
//           <BalanceHeadItem />
//       </BalanceHeadList>
//       {transactions.map(balanceList => {
//         return (
//           <BalanceContentList key={balanceList._id}>
//             <BalanceContentItem balanceList={balanceList} />
//           </BalanceContentList>
//         );
//       })}
//     </div>
//   );
// };

export default BalanceList;
