const getLoading = state => state.finance.isLoading;
const getFinanceOperation = state => state.finance.data;
export default { getLoading, getFinanceOperation };
