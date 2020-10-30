import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import styles from './Diagram.module.css';

const defaultLabelStyle = {
  fontSize: '3px',
  fontFamily: 'sans-serif',
  fill: 'white',
};

export default function Diagram({ finance }) {
  const isTransaction = finance.length !== 0;

  return (
    <div className={styles.Diagram__container}>
      {isTransaction ? (
        <PieChart
          data={finance}
          animate={true}
          startAngle={-90}
          paddingAngle={1}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ ...defaultLabelStyle }}
        />
      ) : (
        <h2>Made operations...</h2>
      )}
    </div>
  );
}
