import React from 'react';
// import { PieChart } from 'react-minimal-pie-chart';
import styles from './StatisticsCosts.module.css';

export default function StatisticsCosts(prop) {
  const { finance } = prop;

  const isTransaction = finance.length !== 0;

  return (
    <>
      {isTransaction ? (
        <ul className={styles.Statistic__costs_list}>
          {finance.map(item => (
            <li key={item.title} className={styles.Statistic__costs_item}>
              <div className={styles.Statistic__costs_item_container}>
                <div className={styles.Statistic__categories}>
                  <div className={styles.Statistic__categories_color}></div>
                  <p className={styles.Statistic__categories_descr}>
                    {item.title}
                  </p>
                </div>
                <p className={styles.Statistic__categories_amount}>
                  {' '}
                  {item.value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any transaction</p>
      )}
    </>
  );
}
