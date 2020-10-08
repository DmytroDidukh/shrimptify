import CommentsService from "@/services/comments";
import types from "../types";

export default {
  state: {
    list: [],
    loading: false
  },
  mutations: {
    setComments: (state, payload) => (state.list = payload),
    setCommentsLoading: (state, payload) => (state.loading = payload)
  },
  actions: {
    fetchComments: async ({ commit }, payload) => {
      commit(types.setCommentsLoading, true);

      const response = await CommentsService.getCommentsByTweetId(payload);

      commit(types.setComments, response.comments);
      commit(types.setAllTweetsLoading, false);
    }
  },
  getters: {
    comments: state => state.list,
    commentsLoading: state => state.loading
  }
};
