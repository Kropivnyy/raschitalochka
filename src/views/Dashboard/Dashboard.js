import React from 'react';

import Cover from '../../components/Containers/Cover';
// import BalanceComponent from '../../components/Balance/BalanceContent';

import BalanceHead from '../../components/Balance/BalanceHead';

import BalanceContentBox from '../../components/Balance/BalanceContentBox';

import BalanceContent from '../../components/Balance/BalanceContent';

import ButtonsBox from '../../components/Containers/ButtonsBox';

import MainButton from '../../components/Buttons/MainButton';

import BalanceListBox from '../../components/BalanceList/BalanceListBox';

import BalanceList from '../../components/BalanceList/BalanceList';

import BalanceHeadList from '../../components/BalanceList/BalanceHeadList';

import BalanceHeadItem from '../../components/BalanceList/BalanceHeadItem';

import BalanceContentList from '../../components/BalanceList/BalanceContentList';

import BalanceContentItem from '../../components/BalanceList/BalanceContentItem';

const DashboardView = () => {
  return (
    <>
      <Cover>
        <BalanceHead>
          <BalanceContentBox>
            <BalanceContent />
          </BalanceContentBox>
          <ButtonsBox>
            <MainButton text={'Add Income'} />
            <MainButton text={'Add Cost'} />
          </ButtonsBox>
        </BalanceHead>

        <BalanceListBox>
          <BalanceList>
            <BalanceHeadList>
              <BalanceHeadItem />
            </BalanceHeadList>
            <BalanceContentList>
              <BalanceContentItem />
            </BalanceContentList>
          </BalanceList>

          <BalanceList>
            <BalanceHeadList>
              <BalanceHeadItem />
            </BalanceHeadList>
            <BalanceContentList>
              <BalanceContentItem />
            </BalanceContentList>
          </BalanceList>
        </BalanceListBox>
      </Cover>
    </>
  );
};

// const DashboardView = () => {
//     return (
//       <>
//       <Cover>
//           <BalanceComponent/>
//       </Cover>

//       </>
//     );
//   };

export default DashboardView;
