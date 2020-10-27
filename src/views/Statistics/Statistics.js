import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Loader from 'react-loader-spinner';
import styles from './Statistics.module.css';
// import { PieChart } from 'react-minimal-pie-chart';
import DiagramContainer from '../../components/DiagramContainer';

export default function StatisticsView() {
  const dispatch = useDispatch();

  const financeOperations = useSelector(authSelectors.getUserFinance);
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(authOperations.getFinanceById());
  }, [dispatch]);

  return (
    <div className={styles.Statistics__container}>
      <h2>Statistics page</h2>
      {!isLoading && (
        <Loader
          type="Bars"
          color="#6b8f24"
          height={50}
          width={100}
          visible={true}
        />
      )}

      {financeOperations.length ? (
        <div className={styles.Diagram__container}>
          {' '}
          <DiagramContainer finance={financeOperations} />
        </div>
      ) : (
        <h2>Made operations...</h2>
      )}
    </div>
  );
}
