import Vue from "vue";
import Vuex from "vuex";
import VuexPersistance from "vuex-persist";

import { authStore } from "./modules/auth/authStore";

const VuexPersist = new VuexPersistance({
  key: "vuex-solidarity",
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backdoor: false,
  },
  mutations: {
    setBackdoor(state) {
      state.backdoor = true;
    },
  },
  actions: {},
  getters: {
    getBackdoor(state) {
      return state.backdoor;
    },
  },
  modules: {
    auth: authStore,
  },
  plugins: [VuexPersist.plugin],
});
