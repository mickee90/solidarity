<template>
  <div>
    <div class="content gap-2 grid grid-cols-2 px-8 xl:grid-cols-3">
      <Card :url="{ name: 'CanHelpShow', params: { city: $store.getters.getCity, postId: 1 } }">
        <template slot="logo"></template>
        <template slot="header">Svenssons måleri</template>
        <template slot="ingress">
          Vi har två extra caddys stående som vi kan låna ut till bruk för
          leverans av matvaror och liknande
        </template>
      </Card>
      <Card :url="{ name: 'CanHelpShow', params: { city: $store.getters.getCity, postId: 2 } }">
        <template slot="logo"></template>
        <template slot="header">Varbergs Kammarkör</template>
        <template slot="ingress">
          Vi vill erbjuda gratis uppträde en gång per vecka till äldreboenden.
          Hör av er till oss så bokar vi in en dag. Vi kan givetvis sjuka ute
          för att minska risken för smitta.
        </template>
      </Card>
      <Card :url="{ name: 'CanHelpShow', params: { city: $store.getters.getCity, postId: 3 } }">
        <template slot="logo"></template>
        <template slot="header">Mats Persson</template>
        <template slot="ingress">
          Jag hjälper gärna till med hemleverans av mat och dyligt. Hör av er
          så bokar vi in en tid.
        </template>
      </Card>
      <Card :url="{ name: 'CanHelpShow', params: { city: $store.getters.getCity, postId: 4 } }">
        <template slot="logo"></template>
        <template slot="header">Sara Jönsson</template>
        <template slot="ingress">
          Om det är någon i riskgruppen för Corona som känner sig ensam och
          behöver prata så finns jag tillgänglig två kvällar i veckan. Hör av er
          så kan vi prata om vad som helst!
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card
  }
};
</script>
