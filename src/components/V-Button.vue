<template>
  <div @click="onClick" class="button__container">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "../styles";
.button {
  $primary: #11998e;
  $secondary: #38ef7d;
  $gray: #9b9b9b;
  &__container {
    width: 180px;
    height: 40px;
    cursor: pointer;
    border: 3px solid $gray;
    color: $gray;
    font-weight: bold;
    line-height: 35px;
    transition: 0.4s;
    &:hover {
      border-image: linear-gradient(to right, $primary, $secondary);
      border-image-slice: 1;
      color: $primary;
    }
  }
}
</style>