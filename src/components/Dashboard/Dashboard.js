import React from 'react';
import { useDispatch } from 'react-redux';
import { transactionsOperations } from '../../redux/transactions';

import Media from 'react-media';

import Cover from './Balance/Containers/Cover';

import BalanceHead from './Balance/BalanceHead';

import BalanceContentBox from './Balance/BalanceContent/BalanceContentBox';

import BalanceContent from './Balance/BalanceContent/BalanceContent';

import ButtonsBox from './Buttons/ButtonsBox';

import BalanceListBox from './BalanceList/BalanceListBox';

import BalanceList from './BalanceList/BalanceList';

import BalanceHeadList from './BalanceList/BalanceHeadList';

import BalanceHeadItem from './BalanceList/BalanceHeadItem';

import BalanceContentList from './BalanceList/BalanceContentList';

import BalanceContentItem from './BalanceList/BalanceContentItem';
import TotalBalance from '../TotalBalance';

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
      {/* <Cover> */}
      {/* <BalanceHead>
          <Media queries={{ big: '(min-width: 700px)' }}>
            {matches =>
              matches.big ? (
                <ButtonsBox>
                  <MainButton text={'Add Income'} />
                  <MainButton text={'Add Cost'} />
                </ButtonsBox>
              ) : (
                <BalanceContentBox>
                  <BalanceContent />
                </BalanceContentBox>
              )
            }
          </Media>
        </BalanceHead> */}

      {/* <Media queries={{ mobile: '(max-width: 767px)' }}>
          {matches => <>{matches.mobile && <TotalBalance />}</>}
        </Media> */}
      <Media
        queries={{
          mobile: '(max-width: 767px)',
          tablet: '(min-width: 768px) and (max-width: 1279px)',
          desktop: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <>
            {matches.mobile && (
              <>
                <TotalBalance />
                <BalanceListBox></BalanceListBox>
                <ButtonsBox />

                {/* <Media queries={{ big: '(min-width: 700px)' }}>
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

                          <BalanceList>
                            <BalanceContentList>
                              <BalanceContentItem />
                            </BalanceContentList>
                          </BalanceList>

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
                  </Media> */}
              </>
            )}
          </>
        )}
      </Media>
      {/* </Cover> */}
    </>
  );
};

export default DashboardView;
