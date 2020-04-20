import axios from "../../../axios/axios";
import axiosAuth from "../../../axios/axiosAuth";

import router from "../../../router/index";

const generateExpirationDate = (expiresIn) => {
  const now = new Date();
  return new Date(now.getTime() + expiresIn * 1000);
};

export const actions = {
  async register({ commit, dispatch, rootGetters }, payload) {
    const response = await axiosAuth
      .post(":signUp?key=" + process.env.VUE_APP_FIREBASE_API_KEY, {
        email: payload.username,
        password: payload.password,
        returnSecureToken: true,
      })
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
        if (error.message === "EMAIL_EXISTS") {
          alert("E-posten du har angivit finns redan");
        }
      });

    if (!response) return;

    commit("authUser", {
      idToken: response.idToken,
      userId: response.localId,
      expirationDate: generateExpirationDate(response.expiresIn),
      refreshToken: response.refreshToken,
    });

    const newUser = {
      userId: response.localId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      username: payload.username,
      city: payload.city,
      accountType: payload.accountType,
    };

    await dispatch("storeUser", newUser);
    dispatch("setLogoutTimer", response.expiresIn);

    const initPost = rootGetters["post/getPost"];
    const postResponse = await dispatch("post/storePost", initPost, {
      root: true,
    });

    if (!postResponse) return;
  },

  setLogoutTimer({ dispatch }, expirationTime) {
    setTimeout(() => {
      dispatch("logout");
    }, expirationTime * 1000);
  },

  async changePassword({ state, commit }, password) {
    const idToken = state.idToken;

    if (!idToken) {
      return;
    }

    const response = await axiosAuth
      .post(":update?key=" + process.env.VUE_APP_FIREBASE_API_KEY, {
        idToken,
        password,
        returnSecureToken: true,
      })
      .then((res) => res.data)
      .catch((err) => alert(err.message));

    if (!response) return false;

    commit("authUser", {
      idToken: response.idToken,
      userId: response.localId,
      expirationDate: generateExpirationDate(response.expiresIn),
      refreshToken: response.refreshToken,
    });

    return true;
  },

  async login({ commit, dispatch }, payload) {
    const response = await axiosAuth
      .post(":signInWithPassword?key=" + process.env.VUE_APP_FIREBASE_API_KEY, {
        email: payload.username,
        password: payload.password,
        returnSecureToken: true,
      })
      .then((res) => res.data)
      .catch((err) => alert(err.message));

    if (!response) return false;

    commit("authUser", {
      idToken: response.idToken,
      userId: response.localId,
      expirationDate: generateExpirationDate(response.expiresIn),
      refreshToken: response.refreshToken,
    });

    dispatch("setLogoutTimer", response.expiresIn);
    await dispatch("fetchUser", payload);
    await dispatch("post/fetchPost", null, { root: true });
    router.replace("/");
  },

  // tryAutoLogin({ commit, state }) {
  //   const idToken = state.idToken;

  //   if (!idToken) {
  //     return;
  //   }

  //   const expirationDate = state.expirationDate;
  //   const now = new Date();
  //   if (!expirationDate || now <= expirationDate) {
  //     return;
  //   }

  //   const userId = state.userId;
  //   commit("authUser", {
  //     idToken: idToken,
  //     userId: userId,
  //     expirationDate,
  //     refreshToken: state.refreshToken,
  //   });
  // },

  logout({ dispatch }) {
    dispatch("resetAllStates", null, { root: true });

    router.replace("/login");
  },

  async fetchUser({ commit, state }, payload) {
    if (!state.idToken) {
      return;
    }

    const url = `/profiles.json?auth=${state.idToken}&orderBy="username"&equalTo="${payload.username}"`;
    const response = await axios.get(url).catch((error) => console.log(error));

    if (!response) return;

    const profile = response.data[Object.keys(response.data)[0]];

    if (profile.username) {
      await commit("profile/storeProfile", { ...profile }, { root: true });
      await commit("setCity", profile.city, { root: true });
    }
  },

  async storeUser({ commit, state }, payload) {
    if (!state.idToken) {
      return;
    }

    const response = await axios
      .post(`/profiles.json?auth=${state.idToken}`, payload)
      .catch((error) => console.log(error));

    if (!response) return;

    console.log(payload);
    commit("profile/storeProfile", { ...payload }, { root: true });
    router.replace("/");
  },
};
