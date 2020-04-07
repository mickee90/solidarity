<template>
  <div id="app">
    <div
      v-if="!backdoor"
      class="absolute bg-gray-100 flex inset-0 items-center justify-center text-4xl z-50"
    >
      Under uppbyggnad
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      backdoor: false,
    };
  },
  created() {
    if ("backdoor" in this.$route.query) {
      this.backdoor = true;
    }
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
