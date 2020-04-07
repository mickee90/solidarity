import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import NeedHelp from "../views/NeedHelp.vue";
import CanHelp from "../views/CanHelp.vue";
import Register from "../views/Register.vue";
import AboutUs from "../views/AboutUs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:city/need-help",
    name: "NeedHelp",
    component: NeedHelp,
  },
  {
    path: "/:city/can-help",
    name: "CanHelp",
    component: CanHelp,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
