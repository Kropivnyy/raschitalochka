import { costCategories } from '../../categories';

// const colors = {
//   'main-expenses': '#ecb22a',
//   food: '#e28b20',
//   car: '#d25925',
//   entertainment: '#73ad57',
//   'self-care': '#67b7d0',
//   'child-care': '#5593d7',
//   'household-products': '#3e6ba8',
//   education: '#9cc254',
//   'other-expenses': '#507c3a',
// };

export default function NormalizedData({ finance, filterMonth, filterYear }) {
  const mappedData = finance
    .filter(item => item.type === '-')
    .filter(item => {
      const d = new Date(item.date);
      const month = d.toLocaleString('en-US', {
        month: 'long',
      });
      return month === filterMonth;
    })
    .filter(item => {
      const d = new Date(item.date);
      const year = d.getFullYear();
      return year === filterYear;
    })
    .reduce((acc, curr) => {
      const curCategory = costCategories.find(
        cat => cat.value === curr.category,
      );
      const title = curCategory?.text || 'Outdated category';
      const value = curr.amount;
      const color = curCategory?.color || 'olive';
      return acc[title]
        ? {
            ...acc,
            [title]: { title, value: acc[title].value + value, color },
          }
        : { ...acc, [title]: { title, value, color } };
    }, {});
  return Object.values(mappedData);
}
