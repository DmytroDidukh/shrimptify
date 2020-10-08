<template>
  <form @submit.prevent="onSubmit" class="form__container">
    <div class="form__group field">
      <input
        v-model="usernameOrEmail"
        autocomplete="off"
        class="form__field"
        type="text"
        placeholder="login"
        id="login"
      />
      <label for="login" class="form__label">login</label>
    </div>
    <div class="form__group field">
      <input
        v-model="password"
        autocomplete="off"
        class="form__field"
        type="password"
        placeholder="password"
        id="password"
      />
      <label for="password" class="form__label">password</label>
    </div>
    <button type="submit" class="button__container">
      Sign In
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      usernameOrEmail: null,
      password: null
    };
  },
  methods: {
    onSubmit() {
      let loginData = {
        usernameOrEmail: this.usernameOrEmail,
        password: this.password
      };
      this.$emit("login-form-submitted", loginData);
      this.usernameOrEmail = null;
      this.password = null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles";

$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;

.form__container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.form__group {
  flex-basis: 28%;
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.2em;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1em;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1em;
    color: $primary;
    font-weight: normal;
  }
  padding-bottom: 6px;
  font-weight: normal;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
/* demo */
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
  background-color: #222222;
}
.button {
  &__container {
    flex-basis: 28%;
    background: none;
    width: 180px;
    height: 40px;
    cursor: pointer;
    border: 3px solid $gray;
    color: $gray;
    font-weight: bold;
    line-height: 35px;
    transition: 0.2s;
    &:hover {
      transform: translateY(-5px);
      border-image: linear-gradient(to right, $primary, $secondary);
      border-image-slice: 1;
      color: $primary;
    }
  }
}
</style>