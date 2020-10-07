<template>
  <div class="home-page">
    <div class="home-page__left-side"></div>
    <div class="home-page__right-side">
      <div class="home-page__right-side__top-login-form">
        <v-input></v-input>
        <v-input></v-input>
        <v-button :onClick="onLogIn" name="Log in"></v-button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/V-Button";
import Input from "@/components/V-Input";
export default {
  name: "log-in-page",
  components: {
    "v-button": Button,
    "v-input": Input
  },
  methods: {
    onLogIn() {
      console.log("click");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles";
.home-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  &__left-side {
    flex-grow: 1;
    background-color: $main-color-selected;
  }
  &__right-side {
    flex-grow: 1;
    background-color: $main-bg;
    &__top-login-form {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      width: 400px;
      height: 100px;
      margin: 20px auto 20px 100px;
      & > * {
        margin-right: 15px;
      }
    }
  }
}
</style>