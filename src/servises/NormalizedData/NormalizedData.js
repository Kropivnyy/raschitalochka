const colors = {
  'main-expenses': '#df8e25',
  food: 'olive',
  car: 'red',
  entertainment: '#25badf',
  'self-care': 'aqua',
  'child-care': 'maroon',
  'household-products': '#aa25df',
  education: '#b6aa41',
  'other-expenses': 'palevioletred',
};

export default function NormalizedData(finance) {
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
  return Object.values(mappedData);
}
