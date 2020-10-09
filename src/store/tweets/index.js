import TweetsService from "@/services/tweets";
import types from "../types";

export default {
  state: {
    list: [],
    loading: false
  },
  mutations: {
    SET_ALL_TWEETS: (state, payload) => (state.list = payload),
    SET_ALL_TWEETS_LOADING: (state, payload) => (state.loading = payload)
  },
  actions: {
    FETCH_ALL_TWEETS: async ({ commit }) => {
      commit(types.SET_ALL_TWEETS_LOADING, true);

      const response = await TweetsService.getAllTweets();

      commit(types.SET_ALL_TWEETS, response.tweet);
      commit(types.SET_ALL_TWEETS_LOADING, false);
    }
  },
  getters: {
    TWEETS: state => state.list,
    TWEETS_LOADING: state => state.loading
  }
};
