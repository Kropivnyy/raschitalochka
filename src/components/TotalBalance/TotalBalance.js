import React from 'react';
import { useSelector } from 'react-redux';
import styles from './TotalBalance.module.css';
import { financeSelectors } from '../../redux/finance';
import Loader from 'react-loader-spinner';

export default function TotalBalance() {
  const isLoading = useSelector(financeSelectors.getLoading);
  const totalBalance = useSelector(financeSelectors.getTotalBalance);
  const typeTotalBalance = useSelector(financeSelectors.getTypeTotalBalance);
  // const [totalBalance, setTotalBalance] = useState(null);

  // const getTotalBalance = ops => {
  //   if (!ops) return;
  //   return ops.reduce((acc, { amount, type }) => {
  //     acc += +`${type}${amount}`;
  //     return acc;
  //   }, 0);
  // };

  // useEffect(() => {
  //   setTotalBalance(getTotalBalance(data));
  // }, [data]);

  return (
    <div className={styles.totalBalance}>
      <span className={styles.text}>Total Balance, UAH</span>
      {!isLoading ? (
        <div className={styles.loader}>
          <Loader type="Bars" color="#669668" width={20} visible={true} />
        </div>
      ) : (
        <span
          style={{ color: typeTotalBalance === '-' && 'red' }}
          className={styles.text__tablet}
        >
          {totalBalance}
        </span>
      )}
    </div>
  );
}
