<template>
  <div id="app">
    <div
      v-if="!$store.getters.getBackdoor"
      class="absolute bg-gray-100 flex inset-0 items-center justify-center text-4xl z-50"
    >
      Under uppbyggnad
    </div>
    <app-nav></app-nav>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Nav from "./components/Layout/Nav";

export default {
  created() {
    if ("backdoor" in this.$route.query) {
      this.$store.commit("setBackdoor");
    }
  },
  components: {
    appNav: Nav,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
