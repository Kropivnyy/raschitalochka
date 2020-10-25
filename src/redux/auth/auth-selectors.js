const getAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
export default { getAuthenticated, getUserName };
