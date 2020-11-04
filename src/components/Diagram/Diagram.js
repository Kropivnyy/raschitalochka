import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import styles from './Diagram.module.css';

const defaultLabelStyle = {
  fontSize: '5px',
  fontFamily: 'sans-serif',
  fill: 'white',
};

export default function Diagram({ finance }) {
  const isTransaction = finance.length !== 0;

  return (
    <div className={styles.Diagram__container}>
      {isTransaction && (
        <PieChart
          data={finance}
          animate={true}
          startAngle={-90}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ ...defaultLabelStyle }}
          labelPosition={70}
          radius={49.5}
        />
      )}
    </div>
  );
}
