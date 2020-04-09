import { mutations, getInitState } from "./authMutations";
import { actions } from "./authActions";
import { getters } from "./authGetters";

export const authStore = {
  namespaced: true,
  state: getInitState(),
  mutations,
  actions,
  getters,
};
