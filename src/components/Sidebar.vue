<template>
  <div class="sidebar">
    <ul class="sidebar__list">
      <li
        class="sidebar__list-item"
        v-for="{ id, name, link } of sidebarData"
        :key="id"
      >
        <router-link :to="link">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { SIDEBAR_DATA } from "@/constants/sidebar.options";

export default {
  name: "Sidebar",
  data() {
    return {
      sidebarData: SIDEBAR_DATA
    };
  }
};
</script>

<style scoped lang="scss">
@import "../styles";

.sidebar {
  padding: 30px;
  width: 400px;
  background: $main-bg;

  &__list {
    list-style: none;

    &-item {
      padding: 10px;

      a {
        font-weight: bold;
        color: $main-text-color;
        text-decoration: none;

        &.router-link-exact-active {
          color: $main-color-selected;
        }
      }
    }
  }
}
</style>
