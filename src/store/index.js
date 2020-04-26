import Vue from "vue";
import Vuex from "vuex";
import VuexPersistance from "vuex-persist";

import { authStore } from "./modules/auth/authStore";
import { profileStore } from "./modules/profiles/profileStore";
import { postStore } from "./modules/posts/postStore";

const VuexPersist = new VuexPersistance({
  key: "vuex-solidarity",
  storage: window.localStorage,
});

Vue.use(Vuex);

const initState = {
  backdoor: false,
  city: "varberg",
};

export default new Vuex.Store({
  state: initState,
  mutations: {
    setBackdoor(state) {
      state.backdoor = true;
    },
    setCity(state, city) {
      state.city = city;
    },
    resetState(state) {
      state.city = "";
    },
  },
  actions: {
    resetAllStates({ commit }) {
      commit("auth/resetState");
      commit("post/resetState");
      commit("profile/resetState");
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
    post: postStore,
  },
  plugins: [VuexPersist.plugin],
});
