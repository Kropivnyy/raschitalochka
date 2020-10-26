const getAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
// const getUserFinance = state => state.auth.finance;
const getLoadFinance = state => state.auth.isLoading;
export default { getAuthenticated, getUserName, getLoadFinance };
