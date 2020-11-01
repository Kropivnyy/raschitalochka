import React from 'react';
import styles from './StatisticsCosts.module.css';

export default function StatisticsCosts({ finance }) {
  const isTransaction = finance.length !== 0;

  return (
    <>
      {isTransaction ? (
        <ul className={styles.Statistic__costs_list}>
          {finance.map(item => (
            <li key={item.title} className={styles.Statistic__costs_item}>
              <div className={styles.Statistic__costs_item_container}>
                <div className={styles.Statistic__categories}>
                  <div
                    style={{
                      backgroundColor: item.color,
                    }}
                    className={styles.Statistic__categories_color}
                  ></div>
                  <p className={styles.Statistic__categories_descr}>
                    {item.title}
                  </p>
                </div>
                <p className={styles.Statistic__categories_amount}>
                  {item.value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.Statistic__fallback}>
          You don`t have any transaction
        </p>
      )}
    </>
  );
}
