<template>
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
      <div class="options-item heart">
        <font-awesome-icon
          class="options-item__icon"
          :icon="['far', 'heart']"
        />
        <span class="options-item__count">{{ tweet.likesCount }}</span>
      </div>
      <div class="options-item comment">
        <font-awesome-icon
          class="options-item__icon"
          :icon="['far', 'comment']"
        />
        <span class="options-item__count">{{ tweet.commentsCount }}</span>
      </div>
      <div class="options-item retweet">
        <font-awesome-icon class="options-item__icon" icon="retweet" />
        <span class="options-item__count">{{ tweet.retweetsCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TweetItem",
  props: {
    tweet: { type: Object, required: true }
  }
};
</script>

<style scoped lang="scss">
@import "../styles";

$padding: 20px;
$red: #aa1520;
$blue: #10cd86;
$purple: #2186e9;

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

  .options-item.heart:hover {
    background: transparentize($red, 0.8);
    color: $red;
  }

  .options-item.comment:hover {
    background: transparentize($blue, 0.8);
    color: $blue;
  }

  .options-item.retweet:hover {
    background: transparentize($purple, 0.8);
    color: $purple;
  }
}
</style>
