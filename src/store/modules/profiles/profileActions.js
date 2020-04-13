import axios from "../../../axios/axios";

export const actions = {
  async storeProfile({ commit, rootGetters }, data) {
    const idToken = rootGetters.getIdToken;
    const userId = rootGetters.getUserId;

    if (!idToken || !userId) {
      alert("Hmm, something is missing. Try again!");
      return;
    }

    const response = await axios
      .post(`/profiles.json?auth=${idToken}`, data)
      .then((res) => res.data);

    if (!response) return;

    commit("storeProfile", response);

    return true;
  },

  async editProfile({ commit, getters, rootGetters }, updatedProfile) {
    const idToken = rootGetters["auth/getIdToken"];
    const userId = rootGetters["auth/getUserId"];

    if (!idToken || !userId) {
      alert("Hmm, something is missing. Try again!");
      return;
    }

    const response = await axios
      .put(`/profiles/${userId}.json?auth=${idToken}`, {
        ...getters.getProfile,
        ...updatedProfile,
      })
      .then((res) => res.data);

    if (!response) return;

    commit("storeProfile", response);

    return true;
  },

  editAvatar({ dispatch, getters }, avatar) {
    const profile = { ...getters.getProfile, avatar };

    dispatch("editProfile", profile);
  },
};
