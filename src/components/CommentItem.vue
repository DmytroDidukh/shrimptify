<template>
  <div class="comment-item">
    <div class="comment-item__author">
      <img
        :src="comment.author.avatar"
        :alt="`${comment.author.firstName} ${comment.author.lastName}`"
      />
      <p>{{ `${comment.author.firstName} ${comment.author.lastName}` }}</p>
    </div>

    <div class="comment-item__content">
      <p>{{ comment.text }}</p>
    </div>

    <div class="comment-item__options">
      <div
        class="options-item heart"
        :class="{ selected: comment.isLiked }"
        title="likes"
      >
        <font-awesome-icon
          class="options-item__icon"
          :icon="[comment.isLiked ? 'fas' : 'far', 'heart']"
        />
        <span class="options-item__count">{{ comment.likesCount }}</span>
      </div>
      <div
        class="options-item reply"
        :class="{ selected: comment.isReplied }"
        title="replies"
      >
        <font-awesome-icon class="options-item__icon" icon="reply" />
        <span class="options-item__count">{{ comment.repliesCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    comment: { type: Object, required: true }
  }
};
</script>

<style scoped lang="scss">
@import "../styles";

$padding: 20px 20px 0;

.comment-item {
  color: $main-text-color-light;
  border: 1px solid $border-color;
  padding: $padding;
  background-color: darken($main-bg, 5%);

  &__author,
  &__options {
    display: flex;
  }

  &__author {
    img {
      border-radius: 50%;
      width: 30px;
      margin-right: 10px;
    }

    p {
      cursor: pointer;
      transition: color 0.2s ease;
      margin: 5px;

      &:hover {
        color: $main-color-selected;
      }
    }
  }

  &__content {
    font-weight: 300;
    text-align: left;
    font-size: 0.9em;
  }

  &__options {
    border-top: 1px solid $border-color;
    padding: 10px 0;
    display: flex;
    justify-content: space-evenly;
  }

  .options-item {
    transition: all 0.2s ease;
    padding: 7px;
    border-radius: 50%;
    cursor: pointer;

    &__icon {
      margin-right: 5px;
      font-size: .9em;
    }

    &__count {
      font-size: .9em;
    }
  }

  .options-item.heart.selected {
    color: $likes-color;
  }

  .options-item.heart:hover {
    background: transparentize($likes-color, 0.8);
    color: $likes-color;
  }

  .options-item.reply.selected {
    color: $replies-color;
  }

  .options-item.reply:hover {
    background: transparentize($replies-color, 0.8);
    color: $replies-color;
  }
}
</style>
