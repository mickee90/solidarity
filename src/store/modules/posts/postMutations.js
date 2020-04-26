export const getInitState = () => {
  return {
    post: {
      title: "",
      ingress: "",
      content: "",
      type: 1,
      email: "",
      phone: "",
      website: "",
      userId: null,
      published: false,
      queryProp: "",
      postId: null,
    },
  };
};

export const mutations = {
  storePost(state, data) {
    state.post = data;
  },
  resetState(state) {
    Object.assign(state, getInitState());
  },
};
