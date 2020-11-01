const getAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
const getUserId = state => state.auth.user.id;
const getUserError = state => state.auth.error;
const getUserIsLoading = state => state.auth.isLoading;
export default {
  getAuthenticated,
  getUserName,
  getUserId,
  getUserError,
  getUserIsLoading,
};
