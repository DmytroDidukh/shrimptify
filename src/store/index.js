import Vue from "vue";
import Vuex from "vuex";

import tweets from "./tweets";
import comments from "./comments";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tweets,
    comments
  }
});
