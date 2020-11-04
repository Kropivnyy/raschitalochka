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
  const [filterMonth, setFilterMonth] = useState('');
  const [filterYear, setFilterYear] = useState('');

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
    const filteredData = financeTransaction.data
      .filter(item => {
        const d = new Date(item.date);
        const month = d.toLocaleString('en-US', {
          month: 'long',
        });
        return month === filterMonth;
      })
      .filter(item => {
        const d = new Date(item.date);
        const year = d.getFullYear();
        return year === filterYear;
      });
    setIncome(totalIncome(filteredData));
    setCost(totalCost(filteredData));
  }, [filterMonth, filterYear, financeTransaction.data]);

  const repeatedMonths = financeTransaction?.data?.map(oper => {
    const d = new Date(oper.date);
    return d.toLocaleString('en-US', {
      month: 'long',
    });
  });
  const repeatedYears = financeTransaction?.data?.map(oper => {
    const d = new Date(oper.date);
    return d.getFullYear();
  });

  function unique(array) {
    let result = [];
    if (array) {
      array.forEach(str => {
        if (!result.includes(str)) result.push(str);
      });
    }
    return result;
  }
  const months = unique(repeatedMonths);
  const years = unique(repeatedYears);

  useEffect(() => {
    setFilterMonth(months[months.length - 1]);
    setFilterYear(years[years.length - 1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'month':
        setFilterMonth(value);
        break;

      case 'year':
        setFilterYear(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  };
  const costsByCategories = NormalizedData({
    finance: financeTransaction.data,
    filterMonth,
    filterYear,
  });

  return (
    <div className={styles.Statistics__wrapper}>
      <div className={styles.Statistic__title_container}>
        <p className={styles.Statistic__title}>Cost diagram</p>
      </div>
      <div className={styles.Statistics__container}>
        {!isLoading ? (
          <div className={styles.Loader}>
            <Loader
              type="Bars"
              color="#3f5544"
              height={50}
              width={100}
              visible={true}
            />
          </div>
        ) : (
          <div className={styles.Statistc__diagram}>
            <Diagram finance={costsByCategories} />
            {/* <button className={styles.Statistic__btn}>Update Diagram</button> */}
          </div>
        )}

        <div className={styles.Statistic__asside}>
          <div className={styles.Statistic__selectors_container}>
            <select
              className={styles.Statistic__selector}
              name="month"
              value={filterMonth}
              onChange={handleSelectChange}
            >
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              className={styles.Statistic__selector}
              name="year"
              value={filterYear}
              onChange={handleSelectChange}
            >
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
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
