import Vue from "vue";
import VueApollo from "vue-apollo";

import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

const getHeaders = () => {
  const headers = {};
  const token = window.localStorage.getItem("apollo-token");
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
};

const link = new WebSocketLink({
  uri: "wss://beer-tasting-game.herokuapp.com/v1/graphql",
  options: {
    reconnect: true,
    timeout: 30000,
    connectionParams: () => {
      return { headers: getHeaders() };
    },
  },
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true,
  }),
  defaultOptions: {
    fetchPolicy: "no-cache",
  },
});

Vue.use(VueApollo);

export default new VueApollo({
  defaultClient: client,
  defaultOptions: {
    $loadingKey: "loading",
  },
});
