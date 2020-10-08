<template>
  <div class="comments">
    <LoadingSpinner v-if="false" />
    <CommentItem
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
    LoadingSpinner,
    CommentItem
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
