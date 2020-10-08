<template>
  <div class="home-page">
    <div class="home-page__left-side"></div>
    <div class="home-page__right-side">
      <div class="home-page__right-side__top-login-form">
        <log-in-form @login-form-submitted="onSubmit"></log-in-form>
      </div>
      <div class="home-page__right-side__heading">
        <p>Here come`s the sun</p>
      </div>
      <div class="home-page__right-side__registration-form">
        <p>Join Srimptify today.</p>
        <button>Sign up</button>
      </div>
    </div>
  </div>
</template>

<script>
import LogInFormVue from "../components/LogInForm.vue";
import authService from "@/services/AuthService";
import tweetService from "@/services/TweetService";
export default {
  name: "log-in-page",
  components: {
    "log-in-form": LogInFormVue
  },
  methods: {
    async onGetFeed() {
      this.tweets = await this.tweetsService.getFeed();
      console.log(this.tweets);
    },
    async onSubmit({ usernameOrEmail, password }) {
      this.data = await this.authService.signIn(usernameOrEmail, password);
    }
  },
  created() {
    this.authService = new authService();
    this.tweetsService = new tweetService();
  },
  data() {
    return {
      data: {},
      tweets: {}
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles";

$primary: #11998e;
$secondary: #38ef7d;
$gray: #9b9b9b;

.home-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  &__left-side {
    background-image: linear-gradient(to right, $primary, $secondary);
    flex-basis: 50%;
    background-color: $main-color-selected;
  }
  &__right-side {
    display: flex;
    flex-direction: column;

    flex-basis: 50%;
    background-color: $main-bg;
    &__top-login-form {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      width: 600px;
      height: 100px;
      margin: 20px auto 200px 100px;
      & > * {
        margin-right: 15px;
      }
    }
    &__heading {
      color: white;
      font-weight: bold;
      font-size: 4em;
    }
    &__registration-form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      background-color: darken($main-bg, 2%);
      padding: 20px;
      align-self: center;
      width: 400px;
      height: 100px;
      & > p {
        align-self: flex-start;
        color: white;
        font-weight: bolder;
      }
      & > button {
        background: none;
        height: 40px;
        cursor: pointer;
        border: 3px solid $gray;
        color: $gray;
        font-weight: bold;
        line-height: 35px;
        transition: 0.2s;
        &:hover {
          border-image: linear-gradient(to right, $primary, $secondary);
          border-image-slice: 1;
          color: $primary;
        }
      }
    }
  }
}
</style>