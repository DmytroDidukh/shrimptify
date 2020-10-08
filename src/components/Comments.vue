<template>
  <div class="comments" v-show="isCommentsVisible">
    <loading-spinner v-if="false" />
    <comment-item
      v-for="comment in comments"
      v-else
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script>
import CommentItem from "./CommentItem";
import LoadingSpinner from "./LoadingSpinner";
import { COMMENTS_DATA } from "../constants/comments.options";

export default {
  name: "Comments",
  components: {
    'loading-spinner': LoadingSpinner,
    'comment-item': CommentItem
  },
  props: {
    isCommentsVisible: Boolean
  },
  data() {
    return {
      comments: COMMENTS_DATA
    };
  }
};
</script>

<style scoped lang="scss">
.comments {
  display: flex;
  flex-direction: column;
}
</style>
