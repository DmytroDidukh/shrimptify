<template>
  <spinner id="loading-spinner" />
</template>

<script>
import Spinner from "vue-loading-spinner/src/components/Hexagon";

export default {
  name: "LoadingSpinner",
  components: {
    Spinner
  }
};
</script>

<style lang="scss">
@import "../styles";

#loading-spinner {
  margin: 30px auto;

  .spinner-inner {
    border-color: $border-color;

    &:before {
      border-color: $secondary;
    }

    ul > li {
      background-color: $primary;
      &:after {
        border-top-color: $primary;
        top: 22px;
      }

      &:before {
        border-bottom-color: $primary;
        top: -10px;
      }
    }
  }
}
</style>
