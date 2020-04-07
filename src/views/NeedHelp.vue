<template>
  <div>
    <div id="nav" class="flex items-center justify-between">
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
        <router-link :to="{ name: 'AboutUs' }" class="ml-3"
          >Kontakta oss</router-link
        >
      </nav>
    </div>
    <div class="content gap-2 grid grid-cols-2 px-8">
      <Card>
        <template slot="logo"></template>
        <template slot="header">Havanna</template>
        <template slot="ingress"
          >Kom och köp lunch hos oss! Erbjuder givetsvis take away till
          rabatterat pris.</template
        >
      </Card>
      <Card>
        <template slot="logo"></template>
        <template slot="header">Varbergs sjukhus</template>
        <template slot="ingress"
          >Luncher, skjuts, utrustrning. Allt är välkommet!</template
        >
      </Card>
      <Card>
        <template slot="logo"></template>
        <template slot="header">Ann Göransson</template>
        <template slot="ingress"
          >Jag vågar inte gå till affären och skulle behöva hjälp att få hem
          maten två gånger i veckan</template
        >
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>
