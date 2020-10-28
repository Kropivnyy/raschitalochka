const data = [
  {
    comments: 'sd',
    _id: '5f96e6059043240c962286f0',
    date: 1603724581884,
    type: '-',
    category: 'Food',
    amount: 323,
    balanceAfter: 323,
    typeBalanceAfter: '-',
    updatedAt: '2020-10-26T15:06:45.522Z',
    createdAt: '2020-10-26T15:06:45.522Z',
  },
  {
    comments: 'cxvx',
    _id: '5f96e6109043240c962286f1',
    date: 1603724592658,
    type: '-',
    category: 'Car',
    amount: 232,
    balanceAfter: 555,
    typeBalanceAfter: '-',
    updatedAt: '2020-10-26T15:06:56.296Z',
    createdAt: '2020-10-26T15:06:56.296Z',
  },
  {
    comments: 'fsd',
    _id: '5f96e6199043240c962286f2',
    date: 1603724602131,
    type: '-',
    category: 'Other',
    amount: 323,
    balanceAfter: 878,
    typeBalanceAfter: '-',
    updatedAt: '2020-10-26T15:07:05.764Z',
    createdAt: '2020-10-26T15:07:05.764Z',
  },
  {
    comments: 'df',
    _id: '5f96e62e9043240c962286f3',
    date: 1603724623188,
    type: '-',
    category: 'Car',
    amount: 3232,
    balanceAfter: 4110,
    typeBalanceAfter: '-',
    updatedAt: '2020-10-26T15:07:26.825Z',
    createdAt: '2020-10-26T15:07:26.825Z',
  },
];

const mappedData = data.reduce((acc, curr) => {
  const category = curr.category;
  const amount = curr.amount;

  return acc[category]
    ? {
        ...acc,
        [category]: { category, amount: acc[category].amount + amount },
      }
    : { ...acc, [category]: { category, amount } };
}, {});

const normalizedData = Object.values(mappedData);

console.log(normalizedData);
