import React from 'react';
import Media from 'react-media';

import Cover from '../../components/Containers/Cover';

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
            )
          }
        </Media>
      </Cover>
    </>
  );
};

export default DashboardView;
