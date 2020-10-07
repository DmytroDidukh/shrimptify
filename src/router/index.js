import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LogInPage from "../views/LogInPage.vue";
import SignUpPage from "../views/SignUpPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/log-in",
    name: "log-in",
    component: LogInPage
  },
  {
    path: "/sigh-up",
    name: "sigh-up",
    component: SignUpPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
