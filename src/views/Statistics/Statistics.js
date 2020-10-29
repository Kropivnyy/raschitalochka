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
          <Diagram finance={financeTransaction} />
          <button className={styles.Statistic__btn}>Update Diagram</button>
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
          <ul className={styles.Statistic__costs_list}>
            <li className={styles.Statistic__costs_item}>
              <div className={styles.Statistic__costs_item_container}>
                <div className={styles.Statistic__categories}>
                  <div className={styles.Statistic__categories_color}></div>
                  <p className={styles.Statistic__categories_descr}>Food</p>
                </div>
                <p className={styles.Statistic__categories_amount}> 222</p>
              </div>
            </li>
            <li className={styles.Statistic__costs_item}>
              <div className={styles.Statistic__costs_item_container}>
                <div className={styles.Statistic__categories}>
                  <div className={styles.Statistic__categories_color}></div>
                  <p className={styles.Statistic__categories_descr}>Food</p>
                </div>
                <p className={styles.Statistic__categories_amount}> 222</p>
              </div>
            </li>
            <li className={styles.Statistic__costs_item}>
              <div className={styles.Statistic__costs_item_container}>
                <div className={styles.Statistic__categories}>
                  <div className={styles.Statistic__categories_color}></div>
                  <p className={styles.Statistic__categories_descr}>Food</p>
                </div>
                <p className={styles.Statistic__categories_amount}> 222</p>
              </div>
            </li>
            <li className={styles.Statistic__costs_item}>
              <div className={styles.Statistic__costs_item_container}>
                <div className={styles.Statistic__categories}>
                  <div className={styles.Statistic__categories_color}></div>
                  <p className={styles.Statistic__categories_descr}>Food</p>
                </div>
                <p className={styles.Statistic__categories_amount}> 222</p>
              </div>
            </li>
            <li className={styles.Statistic__costs_item}>
              <div className={styles.Statistic__costs_item_container}>
                <div className={styles.Statistic__categories}>
                  <div className={styles.Statistic__categories_color}></div>
                  <p className={styles.Statistic__categories_descr}>Food</p>
                </div>
                <p className={styles.Statistic__categories_amount}> 222</p>
              </div>
            </li>
            <li className={styles.Statistic__costs_item}>
              <div className={styles.Statistic__costs_item_container}>
                <div className={styles.Statistic__categories}>
                  <div className={styles.Statistic__categories_color}></div>
                  <p className={styles.Statistic__categories_descr}>Food</p>
                </div>
                <p className={styles.Statistic__categories_amount}> 222</p>
              </div>
            </li>
            <li className={styles.Statistic__costs_item}>
              <div className={styles.Statistic__costs_item_container}>
                <div className={styles.Statistic__categories}>
                  <div className={styles.Statistic__categories_color}></div>
                  <p className={styles.Statistic__categories_descr}>Food</p>
                </div>
                <p className={styles.Statistic__categories_amount}> 222</p>
              </div>
            </li>
            <li className={styles.Statistic__costs_item}>
              <div className={styles.Statistic__costs_item_container}>
                <div className={styles.Statistic__categories}>
                  <div className={styles.Statistic__categories_color}></div>
                  <p className={styles.Statistic__categories_descr}>Food</p>
                </div>
                <p className={styles.Statistic__categories_amount}> 222</p>
              </div>
            </li>
            <li className={styles.Statistic__costs_item}>
              <div className={styles.Statistic__costs_item_container}>
                <div className={styles.Statistic__categories}>
                  <div className={styles.Statistic__categories_color}></div>
                  <p className={styles.Statistic__categories_descr}>Food</p>
                </div>
                <p className={styles.Statistic__categories_amount}> 222</p>
              </div>
            </li>
          </ul>
          <div className={styles.Statistic__total_container}>
            <div className={styles.Statistic__total}>
              <p className={styles.Statistic__total_descr}>Total Costs</p>
              <p className={styles.Statistic__total_cost}>22 222</p>
            </div>
            <div className={styles.Statistic__total}>
              <p className={styles.Statistic__total_descr}>Total Income</p>
              <p className={styles.Statistic__total_income}>11000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
