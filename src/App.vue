<template>
  <div id="app">
    <div
      v-if="!$store.getters.getBackdoor"
      class="absolute bg-gray-100 flex inset-0 items-center justify-center text-4xl z-50"
    >
      Under uppbyggnad
    </div>
    <div id="nav" class="flex items-center justify-between mb-10 shadow-md">
      <div class="text-4xl font-bold">
        <a href="/" class="no-underline">Solidariteten</a>
      </div>
      <nav class="nav flex">
        <router-link :to="{ name: 'NeedHelp' }" class="ml-3"
          >Vi behöver hjälp med</router-link
        >
        <router-link :to="{ name: 'CanHelp' }" class="ml-3"
          >Vi kan hjälpa till med</router-link
        >
        <router-link :to="{ name: 'Register' }" class="ml-3"
          >Registrera dig</router-link
        >
        <router-link :to="{ name: 'ContactUs' }" class="ml-3"
          >Kontakta oss</router-link
        >
      </nav>
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  created() {
    if ("backdoor" in this.$route.query) {
      this.$store.commit("setBackdoor");
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
