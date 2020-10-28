import React from 'react';
import { useDispatch } from 'react-redux';
import { transactionsOperations } from '../../redux/transactions';

import Media from 'react-media';

import Cover from './Balance/Containers/Cover';

import BalanceHead from './Balance/BalanceHead';

import BalanceContentBox from './Balance/BalanceContent/BalanceContentBox';

import BalanceContent from './Balance/BalanceContent/BalanceContent';

import ButtonsBox from './Buttons/ButtonsBox';

import MainButton from './Buttons/MainButton';

import BalanceListBox from './BalanceList/BalanceListBox';

import BalanceList from './BalanceList/BalanceList';

import BalanceHeadList from './BalanceList/BalanceHeadList';

import BalanceHeadItem from './BalanceList/BalanceHeadItem';

import BalanceContentList from './BalanceList/BalanceContentList';

import BalanceContentItem from './BalanceList/BalanceContentItem';

// ----------------------

import dataBase from '../../db.json';

// ----------------------

const DashboardView = () => {
  // TODO: need to get form redux store
  const userId = '5f9726599043240c96228703';
  const lastActualBalance = dataBase[dataBase.length - 1].balanceAfter;

  const dispatch = useDispatch();

  dispatch(transactionsOperations.getTransactions(userId));

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
          <BalanceList />
        </BalanceListBox>
      </Cover>
    </>
  );
};

export default DashboardView;
