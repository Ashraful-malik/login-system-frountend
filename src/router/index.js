import Vue from "vue";
import Router from "vue-router";
import login from "../components/login";
import signUp from "../components/signUp";
import home from "../components/home.vue";
import user from "../components/user.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/user",
      name: "user",
      component: user,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/signup",
      name: "signup",
      component: signUp,
    },
  ],
});
