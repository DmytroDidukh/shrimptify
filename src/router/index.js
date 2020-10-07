import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tweets from "../views/Tweets.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tweets",
    name: "Tweets",
    component: Tweets
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
