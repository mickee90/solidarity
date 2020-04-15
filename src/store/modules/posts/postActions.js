import axios from "../../../axios/axios";

export const actions = {
  async storePost({ rootGetters, dispatch }, data) {
    const idToken = rootGetters["auth/getIdToken"];
    const userId = rootGetters["auth/getUserId"];

    if (!idToken || !userId) {
      alert("Någonting gick fel. Var vänlig prova igen.");
      return;
    }

    let post = { ...data, userId };

    const response = await axios
      .post(`/posts.json?auth=${idToken}`, post)
      .then((res) => res.data);

    if (!response) return;

    console.log(response);

    post = { ...post, postId: response.name };

    const update = await dispatch("editPost", post);

    if (!update) return;

    return true;
  },

  async editPost({ commit, getters, rootGetters }, data) {
    const idToken = rootGetters["auth/getIdToken"];
    const userId = rootGetters["auth/getUserId"];

    if (!idToken || !userId) {
      alert("Någonting gick fel. Var vänlig prova igen.");
      return;
    }

    const currentPost = getters.getPost;
    let postId = null;
    if (currentPost.postId !== undefined && currentPost.postId !== "") {
      postId = currentPost.postId;
    } else if (data.postId !== undefined && data.postId !== "") {
      postId = data.postId;
    }

    if (postId === null) {
      const response = await axios
        .get(`/posts.json?auth=${idToken}&orderBy="userId"&equalTo="${userId}"`)
        .then((res) => res.data);

      if (!response) return;

      if (Object.keys(response)[0] === undefined) return;

      postId = Object.keys(response)[0];
    }

    const response = await axios
      .put(`/posts/${postId}.json?auth=${idToken}`, {
        ...currentPost,
        ...data,
      })
      .then((res) => res.data);

    if (!response) return;

    commit("storePost", response);

    return true;
  },
};
