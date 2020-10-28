import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { financeSelectors, financeOperations } from '../../redux/finance';
import Diagram from '../../components/Diagram';
import styles from './Statistics.module.css';
import Loader from 'react-loader-spinner';

export default function StatisticsView() {
  const dispatch = useDispatch();

  const financeTransaction = useSelector(financeSelectors.getFinanceOperation);
  const isLoading = useSelector(financeSelectors.getLoading);
  useEffect(() => {
    dispatch(financeOperations.getOperationsById());
  }, [dispatch]);

  return (
    <div className={styles.Statistics__container}>
      <h2>Statistics page</h2>

      {!isLoading ? (
        <Loader
          type="Bars"
          color="#3f5544"
          height={50}
          width={100}
          visible={true}
        />
      ) : (
        <div className={styles.Diagram__container}>
          <Diagram finance={financeTransaction} />
        </div>
      )}
    </div>
  );
}
