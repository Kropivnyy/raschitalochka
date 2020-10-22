const getAuthenticated = state => state.auth.isAuthenticated;
const getIsRegistration = state => state.auth.isRegistration;
export default { getAuthenticated, getIsRegistration };
