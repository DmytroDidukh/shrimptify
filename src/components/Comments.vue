<template>
  <div class="comments" v-show="isCommentsVisible">
    <loading-spinner v-if="COMMENTS_LOADING" />
    <comment-item
      v-for="comment in COMMENTS"
      v-else
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import types from "@/store/types";
import CommentItem from "./CommentItem";
import LoadingSpinner from "./LoadingSpinner";

export default {
  name: "Comments",
  components: {
    "loading-spinner": LoadingSpinner,
    "comment-item": CommentItem
  },
  props: {
    isCommentsVisible: Boolean
  },
  computed: {
    ...mapGetters([types.COMMENTS, types.COMMENTS_LOADING])
  }
};
</script>

<style scoped lang="scss">
.comments {
  display: flex;
  flex-direction: column;
  animation: comments-slide;
}
</style>
