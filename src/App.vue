<template>
  <div id="app">
    <LogInPage v-if="!logged"></LogInPage>
    <div v-else>
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import LogInPage from "@/views/LogInPage.vue";

export default {
  data() {
    return {
      logged: false
    };
  },
  name: "App",
  components: {
    Sidebar,
    LogInPage
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap");
@import "./styles";

html,
body,
#app {
  margin: 0;
  height: 100%;
}

body {
  background: $main-bg;
}

#app {
  font-family: Roboto Slab, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
}
</style>
