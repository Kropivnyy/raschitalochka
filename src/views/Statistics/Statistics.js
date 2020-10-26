import React, { useEffect, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import { PieChart } from 'react-minimal-pie-chart';
// import Loader from 'react-loader-spinner';
import styles from './Statistics.module.css';
import dataEntry from './statistics.json';

const colors = {
  MainExpenses: 'fuchsia',
  Food: 'olive',
  Car: 'red',
  Entertanment: 'lime',
  SelfCare: 'aqua',
  ChildCare: 'maroon',
  HouseholdProducts: 'blue',
  Education: 'green',
  Other: 'palevioletred',
};

export default function StatisticsView() {
  const dispatch = useDispatch();
  const isLoadFinance = useSelector(authSelectors.getLoadFinance);
  useEffect(() => {
    dispatch(authOperations.getUserFinanseById());
  }, [dispatch]);

  console.log(isLoadFinance);
  const data = dataEntry.map(costs => {
    if (costs.type === '-') {
      return {
        title: costs.category,
        value: costs.amount,
        color: colors[costs.category],
      };
    }
  });

  return (
    <div className={styles.Statistics__container}>
      <h2>Statistics page</h2>

      <div className={styles.Diagram__container}>
        <PieChart data={data} animate={true} startAngle={-90} />
      </div>
    </div>
  );
}
