<template>
  <div class="tweets">
    <h1>tweets</h1>
    <LoadingSpinner v-if="tweetsLoading" />
    <TweetItem v-for="tweet in tweets" v-else :key="tweet.id" :tweet="tweet" />
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
    TweetItem,
    LoadingSpinner
  },
  computed: {
    ...mapGetters([types.tweets, types.tweetsLoading])
  },
  methods: {
    ...mapActions([types.fetchAllTweets])
  },
  mounted() {
    this.fetchAllTweets();
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
