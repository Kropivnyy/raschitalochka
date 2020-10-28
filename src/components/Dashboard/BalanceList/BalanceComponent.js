import React from 'react';

import BalanceHead from '../../components/Balance/BalanceHead';

import BalanceContentBox from '../../components/Balance/BalanceContentBox';

import BalanceContent from '../../components/Balance/BalanceContent';

import ButtonsBox from '../../components/Containers/ButtonsBox';

import MainButton from '../../components/Buttons/MainButton';

const BalanceComponent = () => {
  return (
    <BalanceHead>
      <BalanceContentBox>
        <BalanceContent />
        <ButtonsBox>
          <MainButton text={'Add Income'} />
          <MainButton text={'Add Cost'} />
        </ButtonsBox>
      </BalanceContentBox>
    </BalanceHead>
  );
};

export default BalanceComponent;
