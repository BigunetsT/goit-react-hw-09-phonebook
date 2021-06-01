const getUserEmail = state => state.auth.user.email;
const getIsAuthenticated = state => state.auth.isAuthenticated;

export default {
  getIsAuthenticated,
  getUserEmail,
};
