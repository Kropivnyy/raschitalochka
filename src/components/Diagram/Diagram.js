import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import styles from './Diagram.module.css';
const colors = {
  Main: '#df8e25',
  Food: 'olive',
  Car: 'red',
  Entertainment: '#25badf',
  Self: 'aqua',
  Child: 'maroon',
  House: '#aa25df',
  Education: '#b6aa41',
  Other: 'palevioletred',
};

const defaultLabelStyle = {
  fontSize: '5px',
  fontFamily: 'sans-serif',
  fill: 'white',
};

export default function Diagram(prop) {
  const { finance } = prop;
  const mappedData = finance
    .filter(item => item.type === '-')
    .reduce((acc, curr) => {
      const title = curr.category;
      const value = curr.amount;
      const color = colors[title];
      return acc[title]
        ? {
            ...acc,
            [title]: { title, value: acc[title].value + value, color },
          }
        : { ...acc, [title]: { title, value, color } };
    }, {});
  const normalizedData = Object.values(mappedData);
  const isTransaction = normalizedData.length !== 0;

  return (
    <div className={styles.Diagram__container}>
      {isTransaction ? (
        <PieChart
          data={normalizedData}
          animate={true}
          startAngle={-90}
          paddingAngle={1}
          style={{ height: '300px' }}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ ...defaultLabelStyle }}
        />
      ) : (
        <h2>Made operations...</h2>
      )}
    </div>
  );
}
