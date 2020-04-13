export const getInitState = () => {
  return {
    profile: {
      userId: null,
      firstName: "",
      lastName: "",
      username: "",
      avatar: null,
    },
  };
};

export const mutations = {
  storeProfile(state, data) {
    state.profile = data;
  },
  setProfile(state, data) {
    state.profile = { ...data };
  },
  resetState(state) {
    Object.assign(state, getInitState());
  },
};
