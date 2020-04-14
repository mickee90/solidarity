import Vue from "vue";
import Vuex from "vuex";
import VuexPersistance from "vuex-persist";

import { authStore } from "./modules/auth/authStore";
import { profileStore } from "./modules/profiles/profileStore";

const VuexPersist = new VuexPersistance({
  key: "vuex-solidarity",
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backdoor: false,
    city: "",
  },
  mutations: {
    setBackdoor(state) {
      state.backdoor = true;
    },
    setCity(state, city) {
      state.city = city;
    },
  },
  actions: {
    resetAllStates({ commit }) {
      // Calls resetState for each module who has it declared. (All modules at the moment)
      commit("auth/resetState");
      // commit("auth/resetState");
    },
    setCity({ commit }, city) {
      commit("setCity", city);
    },
  },
  getters: {
    getBackdoor(state) {
      return state.backdoor;
    },
    getCity(state) {
      return state.city;
    },
  },
  modules: {
    auth: authStore,
    profile: profileStore,
  },
  plugins: [VuexPersist.plugin],
});
