const getAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
const getCurrency = state => state.auth.currency;
export default { getAuthenticated, getUserName, getCurrency };
