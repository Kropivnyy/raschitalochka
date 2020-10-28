import React from 'react';
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
// import TotalBalance from '../TotalBalance';

const DashboardView = () => {
  return (
    <>
      <Cover>
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
        </Media>
      </Cover>
    </>
  );
};

export default DashboardView;
