import TweetsService from "@/services/tweets";
import types from "../types";

export default {
  state: {
    list: [],
    loading: false
  },
  mutations: {
    setAllTweets: (state, payload) => (state.list = payload),
    setAllTweetsLoading: (state, payload) => (state.loading = payload)
  },
  actions: {
    fetchAllTweets: async ({ commit }) => {
      commit(types.setAllTweetsLoading, true);

      const response = await TweetsService.getAllTweets();

      commit(types.setAllTweets, response.tweet);
      commit(types.setAllTweetsLoading, false);
    }
  },
  getters: {
    tweets: state => state.list,
    tweetsLoading: state => state.loading
  }
};
