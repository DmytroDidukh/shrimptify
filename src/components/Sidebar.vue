<template>
  <div class="sidebar">
    <img class="logo" src="https://i.imgur.com/k3k1uxm.png" alt="">
    <ul class="sidebar__list">
      <li
        class="sidebar__list-item"
        v-for="{ id, name, link, icon } of sidebarData"
        :key="id"
      >
        <router-link :to="link">{{ name }}</router-link>
        <font-awesome-icon class="sidebar__list-item__icon" :icon="icon" />
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
  width: 200px;
  background: $main-bg;
  height: 100%;
  border-left: 1px solid $border-color;
  border-right: 1px solid $border-color;

  .logo {
    width: 90px;
  }

  &__list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &-item {
      padding: 10px;
      display: flex;
      flex-direction: row-reverse;

      a {
        font-weight: bold;
        color: $main-text-color-light;
        text-decoration: none;
      }

      &__icon {
        color: $main-text-color-light;
        margin-right: 10px;
      }

      a.router-link-exact-active,
      a.router-link-exact-active + svg {
        color: $main-color-selected;
      }
    }
  }
}
</style>
