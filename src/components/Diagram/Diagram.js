import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

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
  color: 'white',
};

export default function Diagram(prop) {
  const { finance } = prop;

  const mappedData = finance.reduce((acc, curr) => {
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
    <>
      {isTransaction ? (
        <PieChart
          data={normalizedData}
          animate={true}
          startAngle={-90}
          segmentsShift={0.5}
          radius={45}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ ...defaultLabelStyle }}
        />
      ) : (
        <h2>Made operations...</h2>
      )}
    </>
  );
}
