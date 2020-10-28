const getAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
const getUserId = state => state.auth.user.id;
export default { getAuthenticated, getUserName, getUserId };
