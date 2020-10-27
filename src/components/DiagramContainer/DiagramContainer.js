import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const colors = {
  MainExpenses: 'fuchsia',
  Food: 'olive',
  Car: 'red',
  Entertainment: 'lime',
  SelfCare: 'aqua',
  ChildCare: 'maroon',
  HouseholdProducts: 'blue',
  Education: 'green',
  Other: 'palevioletred',
};

const defaultLabelStyle = {
  fontSize: '5px',
  fontFamily: 'sans-serif',
};

export default function DiagramContainer(prop) {
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

  return (
    <>
      <PieChart
        data={normalizedData}
        animate={true}
        startAngle={-90}
        label={({ dataEntry }) => dataEntry.title}
        labelStyle={{ ...defaultLabelStyle }}
        segmentsShift={0.5}
        radius={49}
      />
    </>
  );
}
