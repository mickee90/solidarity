import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import apolloProvider from "./apolloProvider";
import VueTailwind from "vue-tailwind";

Vue.use(VueTailwind);

import "./assets/styles/index.css";

// Globally register all `_base`-prefixed components
import "./components/_globals";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHandshake);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
