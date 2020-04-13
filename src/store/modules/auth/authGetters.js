export const getters = {
  getUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.idToken !== null;
  },
  getIdToken(state) {
    return state.idToken;
  },
  getUserId(state) {
    return state.userId;
  },
  getExpirationDate(state) {
    return state.expirationDate;
  },
  getRefreshToken(state) {
    return state.refreshToken;
  },
};
