import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { financeSelectors, financeOperations } from '../../redux/finance';
import Diagram from '../../components/Diagram';
import styles from './Statistics.module.css';
import Loader from 'react-loader-spinner';
import NormalizedData from '../../servises/NormalizedData';
import StatisticsCost from '../../components/StatisticsCosts';

export default function StatisticsView() {
  const [income, setIncome] = useState(0);
  const [cost, setCost] = useState(0);
  const dispatch = useDispatch();

  const financeTransaction = useSelector(financeSelectors.getFinanceOperation);
  const isLoading = useSelector(financeSelectors.getLoading);

  const totalIncome = data => {
    if (!data) return;
    return data.reduce((acc, { amount, type }) => {
      if (type !== '+') return acc;
      acc += amount;
      return acc;
    }, 0);
  };

  const totalCost = data => {
    if (!data) return;
    return data.reduce((acc, { amount, type }) => {
      if (type !== '-') return acc;
      acc += amount;
      return acc;
    }, 0);
  };

  useEffect(() => {
    dispatch(financeOperations.getOperationsById());
  }, [dispatch]);

  useEffect(() => {
    setIncome(totalIncome(financeTransaction));
    setCost(totalCost(financeTransaction));
  }, [financeTransaction]);

  const costsByCategories = NormalizedData(financeTransaction);

  return (
    <div className={styles.Statistics__wrapper}>
      <div className={styles.Statistic__title_container}>
        <p className={styles.Statistic__title}>cost diagram</p>
      </div>
      <div className={styles.Statistics__container}>
        {!isLoading ? (
          <Loader
            type="Bars"
            color="#3f5544"
            height={50}
            width={100}
            visible={true}
          />
        ) : (
          <div className={styles.Statistc__diagram}>
            <Diagram finance={costsByCategories} />
            {/* <button className={styles.Statistic__btn}>Update Diagram</button> */}
          </div>
        )}

        <div className={styles.Statistic__asside}>
          <div className={styles.Statistic__selectors_container}>
            <select className={styles.Statistic__selector}>
              <option>Month</option>
            </select>
            <select className={styles.Statistic__selector}>
              <option>Year</option>
            </select>
          </div>

          <div className={styles.Statistic__costs}>
            <div className={styles.Statistic__costs_header_container}>
              <div className={styles.Statistic__costs_header}>
                <h3 className={styles.Statistic__costs_descr}>Categories</h3>
                <h3 className={styles.Statistic__costs_descr}>Amount</h3>
              </div>
            </div>

            <StatisticsCost finance={costsByCategories} />

            <div className={styles.Statistic__total_container}>
              <div className={styles.Statistic__total}>
                <p className={styles.Statistic__total_descr}>Total Costs:</p>
                <p className={styles.Statistic__total_cost}>{cost}</p>
              </div>
              <div className={styles.Statistic__total}>
                <p className={styles.Statistic__total_descr}>Total Income:</p>
                <p className={styles.Statistic__total_income}>{income}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
