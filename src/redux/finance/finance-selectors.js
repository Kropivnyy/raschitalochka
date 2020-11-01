const getLoading = state => state.finance.isLoading;
const getFinanceOperation = state => state.finance.data;
const getTotalBalance = state => state.finance.data.totalBalance;
const getTypeTotalBalance = state => state.finance.data.typeTotalBalance;
export default {
  getLoading,
  getTotalBalance,
  getTypeTotalBalance,
  getFinanceOperation,
};
