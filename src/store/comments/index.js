import CommentsService from "@/services/comments";
import types from "../types";

export default {
  state: {
    list: [],
    loading: false
  },
  mutations: {
    SET_COMMENTS: (state, payload) => (state.list = payload),
    SET_COMMENTS_LOADING: (state, payload) => (state.loading = payload)
  },
  actions: {
    FETCH_COMMENTS_BY_TWEET_ID: async ({ commit }, payload) => {
      commit(types.SET_COMMENTS_LOADING, true);

      const response = await CommentsService.getCommentsByTweetId(payload);

      commit(types.SET_COMMENTS, response.comments);
      commit(types.SET_COMMENTS_LOADING, false);
    }
  },
  getters: {
    COMMENTS: state => state.list,
    COMMENTS_LOADING: state => state.loading
  }
};
