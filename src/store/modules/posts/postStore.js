import { mutations, getInitState } from "./postMutations";
import { actions } from "./postActions";
import { getters } from "./postGetters";

export const postStore = {
  namespaced: true,
  state: getInitState(),
  mutations,
  actions,
  getters,
};
