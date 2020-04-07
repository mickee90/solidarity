<template>
  <div>
    <div id="nav" class="flex items-center justify-between">
      <div class="text-4xl font-bold">
        <a href="/" class="no-underline">Solidariteten</a>
      </div>
      <nav class="nav flex">
        <router-link :to="{ name: 'NeedHelp' }" class="ml-3"
          >Vi behöver hjälp med</router-link
        >|
        <router-link :to="{ name: 'CanHelp' }" class="ml-3"
          >Vi kan hjälpa till med</router-link
        >
        <router-link :to="{ name: 'Register' }" class="ml-3"
          >Registrera dig</router-link
        >
        <router-link :to="{ name: 'AboutUs' }" class="ml-3"
          >Kontakta oss</router-link
        >
      </nav>
    </div>
    <div class="content">
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components() {
    Card;
  },
};
</script>
