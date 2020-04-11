import { mutations, getInitState } from "./profileMutations";
import { actions } from "./profileActions";
import { getters } from "./profileGetters";

export const profileStore = {
  namespaced: true,
  state: getInitState(),
  mutations,
  actions,
  getters,
};
