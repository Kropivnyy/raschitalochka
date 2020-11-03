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
  console.log(finance);
  return (
    <div className={styles.Diagram__container}>
      {isTransaction && (
        <PieChart
          data={finance}
          animate={true}
          startAngle={-90}
          paddingAngle={0}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ ...defaultLabelStyle }}
        />
      )}
    </div>
  );
}
