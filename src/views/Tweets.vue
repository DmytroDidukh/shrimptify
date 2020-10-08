<template>
  <div class="tweets">
    <h1>tweets</h1>
    <TweetItem v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script>
import TweetItem from "@/components/TweetItem";
import { TWEETS_DATA } from "@/constants/tweets.options";

export default {
  name: "Tweets",
  data() {
    return {
      tweets: TWEETS_DATA
    };
  },
  components: {
    TweetItem
  }
};
</script>

<style scoped lang="scss">
@import "../styles.scss";

.tweets {
  flex: 1;

  h1 {
    background: linear-gradient(to right, $primary, $secondary);
    color: $main-text-color-dark;
  }
}
</style>
