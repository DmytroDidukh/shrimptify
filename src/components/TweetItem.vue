<template>
  <div class="tweet-container">
    <div class="tweet-item">
      <div class="tweet-item__author">
        <img
          :src="tweet.author.avatar"
          :alt="`${tweet.author.firstName} ${tweet.author.lastName}`"
        />
        <p>{{ `${tweet.author.firstName} ${tweet.author.lastName}` }}</p>
      </div>

      <div class="tweet-item__content">
        <p>{{ tweet.text }}</p>
      </div>

      <div class="tweet-item__options">
        <div
          class="options-item heart"
          :class="{ selected: tweet.isLiked }"
          title="likes"
        >
          <font-awesome-icon
            class="options-item__icon"
            :icon="[tweet.isLiked ? 'fas' : 'far', 'heart']"
          />
          <span class="options-item__count">{{ tweet.likesCount }}</span>
        </div>
        <div
          class="options-item comment"
          @click="showComments(tweet.id)"
          title="comments"
        >
          <font-awesome-icon
            class="options-item__icon"
            :icon="['far', 'comment']"
          />
          <span class="options-item__count">{{ tweet.commentsCount }}</span>
        </div>
        <div
          class="options-item retweet"
          :class="{ selected: tweet.isRetweeted }"
          title="retweets"
        >
          <font-awesome-icon class="options-item__icon" icon="retweet" />
          <span class="options-item__count">{{ tweet.retweetsCount }}</span>
        </div>
      </div>
    </div>
    <comments :isCommentsVisible="isCommentsVisible" />
  </div>
</template>

<script>
import {mapActions} from "vuex"

import Comments from "./Comments";
import types from "@/store/types";
import store from "@/store";

export default {
  name: "TweetItem",
  components: {
    comments: Comments
  },
  props: {
    tweet: { type: Object, required: true }
  },
  data() {
    return {
      isCommentsVisible: false
    };
  },
  methods: {
    ...mapActions([
      types.fetchCommentsByTweetId
    ]),
    showComments() {
      console.log(store)
      this.fetchCommentsByTweetId();
      this.isCommentsVisible = !this.isCommentsVisible;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles";

$padding: 20px;

.tweet-container {
  display: flex;
  flex-direction: column;
}

.tweet-item {
  color: $main-text-color-light;
  border: 1px solid $border-color;
  padding: $padding;

  &__author,
  &__options {
    display: flex;
  }

  &__author {
    img {
      border-radius: 50%;
      width: 50px;
      margin-right: 10px;
    }

    p {
      cursor: pointer;
      transition: color 0.2s ease;

      &:hover {
        color: $main-color-selected;
      }
    }
  }

  &__content {
    font-weight: 300;
    text-align: left;
    font-size: 1em;
  }

  &__options {
    border-top: 1px solid $border-color;
    padding-top: $padding;
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
      font-size: 1.1em;
    }
  }

  .options-item.heart.selected {
    color: $likes-color;
  }

  .options-item.heart:hover {
    background: transparentize($likes-color, 0.8);
    color: $likes-color;
  }

  .options-item.comment:hover {
    background: transparentize($comments-color, 0.8);
    color: $comments-color;
  }

  .options-item.retweet.selected {
    color: $retweets-color;
  }

  .options-item.retweet:hover {
    background: transparentize($retweets-color, 0.8);
    color: $retweets-color;
  }
}
</style>
