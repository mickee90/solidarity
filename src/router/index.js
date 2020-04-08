import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import NeedHelp from "../views/NeedHelp.vue";
import NeedHelpShow from "../views/NeedHelpShow.vue";
import CanHelp from "../views/CanHelp.vue";
import CanHelpShow from "../views/CanHelpShow.vue";
import Register from "../views/Register.vue";
import ContactUs from "../views/ContactUs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/varberg/need-help",
    name: "NeedHelp",
    component: NeedHelp,
  },
  {
    path: "/varberg/need-help-show/1",
    name: "NeedHelpShow",
    component: NeedHelpShow,
  },
  {
    path: "/varberg/can-help",
    name: "CanHelp",
    component: CanHelp,
  },
  {
    path: "/varberg/can-help-show/1",
    name: "CanHelpShow",
    component: CanHelpShow,
  },
  {
    path: "/varberg/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/varberg/about-us",
    name: "ContactUs",
    component: ContactUs,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
