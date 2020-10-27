import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  const userId = '5f9726599043240c96228703';

  useDispatch(transactionsOperations.getTransactions(userId));
  const lastActualBalance = dataBase[dataBase.length - 1].balanceAfter;

  return (
    <>
      <Cover>
        <BalanceHead>
          <Media queries={{ big: '(min-width: 700px)' }}>
            {matches =>
              matches.big ? (
                <ButtonsBox>
                  <MainButton text={'Add Income'} />
                  <MainButton text={'Add Cost'} />
                </ButtonsBox>
              ) : (
                <BalanceContentBox>
                  <BalanceContent actualBalance={lastActualBalance} />
                </BalanceContentBox>
              )
            }
          </Media>
        </BalanceHead>

        <Media queries={{ big: '(min-width: 700px)' }}>
          {matches =>
            matches.big ? (
              <BalanceListBox>
                <BalanceHeadList>
                  <BalanceHeadItem />
                </BalanceHeadList>

                <BalanceList>
                  <BalanceContentList>
                    <BalanceContentItem />
                  </BalanceContentList>
                </BalanceList>
              </BalanceListBox>
            ) : (
              <>
                <ButtonsBox>
                  <MainButton text={'Add Income'} />
                  <MainButton text={'Add Cost'} />
                </ButtonsBox>
                <BalanceListBox>
                  <BalanceList>
                    <BalanceHeadList>
                      <BalanceHeadItem />
                    </BalanceHeadList>
                    <BalanceContentList>
                      <BalanceContentItem />
                    </BalanceContentList>
                  </BalanceList>
                </BalanceListBox>
              </>
            )
          }
        </Media>
      </Cover>
    </>
  );
};

export default DashboardView;
