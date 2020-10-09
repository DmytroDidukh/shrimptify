<template>
  <div class="tweets">
    <h1>tweets</h1>
    <loading-spinner v-if="TWEETS_LOADING" />
    <tweet-item v-for="tweet in TWEETS" v-else :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import TweetItem from "@/components/TweetItem";
import LoadingSpinner from "@/components/LoadingSpinner";
import types from "@/store/types";

export default {
  name: "Tweets",
  components: {
    'tweet-item': TweetItem,
    'loading-spinner': LoadingSpinner
  },
  computed: {
    ...mapGetters([types.TWEETS, types.TWEETS_LOADING])
  },
  methods: {
    ...mapActions([types.FETCH_ALL_TWEETS])
  },
  mounted() {
    this.FETCH_ALL_TWEETS();
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
    margin: 0;
  }
}
</style>
