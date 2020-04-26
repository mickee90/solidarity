<template>
  <div>
    <div
      class="min-h-v-1/4 items-center flex justify-around text-2xl"
      v-if="state === 'loading'"
    >Laddar..</div>
    <div
      class="min-h-v-1/4 items-center flex justify-center grid text-2xl"
      v-else-if="state === 'empty'"
    >
      Inga inlägg hittades. Prova en annan ort
      <br />
      <div class="relative">
        <select
          @change="onChosenCity"
          v-model="chosenCity"
          class="appearance-none bg-white block border border-gray-200 focus:bg-white focus:border-gray-500 focus:outline-none leading-tight pr-8 px-4 py-3 rounded text-gray-700 w-full"
          id="grid-state"
        >
          <option value>Välj ort</option>
          <option value="falkenberg">Falkenberg</option>
          <option value="halmstad">Halmstad</option>
          <option value="varberg">Varberg</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
    <div v-else class="content gap-2 grid grid-cols-2 px-8 xl:grid-cols-3">
      <!-- <Card
        :url="{
          name: 'CanHelpShow',
          params: { city: $store.getters.getCity, postId: 1 },
        }"
      >
        <template slot="logo"></template>
        <template slot="header">Svenssons måleri</template>
        <template slot="ingress">
          Vi har två extra caddys stående som vi kan låna ut till bruk för
          leverans av matvaror och liknande
        </template>
      </Card>
      <Card
        :url="{
          name: 'CanHelpShow',
          params: { city: $store.getters.getCity, postId: 2 },
        }"
      >
        <template slot="logo"></template>
        <template slot="header">Varbergs Kammarkör</template>
        <template slot="ingress">
          Vi vill erbjuda gratis uppträde en gång per vecka till äldreboenden.
          Hör av er till oss så bokar vi in en dag. Vi kan givetvis sjuka ute
          för att minska risken för smitta.
        </template>
      </Card>
      <Card
        :url="{
          name: 'CanHelpShow',
          params: { city: $store.getters.getCity, postId: 3 },
        }"
      >
        <template slot="logo"></template>
        <template slot="header">Mats Persson</template>
        <template slot="ingress">
          Jag hjälper gärna till med hemleverans av mat och dyligt. Hör av er så
          bokar vi in en tid.
        </template>
      </Card>
      <Card
        :url="{
          name: 'CanHelpShow',
          params: { city: $store.getters.getCity, postId: 4 },
        }"
      >
        <template slot="logo"></template>
        <template slot="header">Sara Jönsson</template>
        <template slot="ingress">
          Om det är någon i riskgruppen för Corona som känner sig ensam och
          behöver prata så finns jag tillgänglig två kvällar i veckan. Hör av er
          så kan vi prata om vad som helst!
        </template>
      </Card>-->

      <Card
        v-for="[key, post] in Object.entries(posts)"
        :key="key"
        :url="{ name: 'CanHelpShow', params: { city: post.city, postId: key } }"
      >
        <template slot="logo"></template>
        <template slot="header">{{ post.title }}</template>
        <template slot="ingress">
          <div v-html="post.ingress"></div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  data() {
    return {
      pagination: 20,
      posts: [],
      state: "loading",
      chosenCity: ""
    };
  },
  methods: {
    onChosenCity() {
      if (this.chosenCity === "") return;

      this.$store.dispatch("setCity", this.chosenCity);

      this.$router.push({
        name: "NeedHelp",
        params: { city: this.chosenCity }
      });
    }
  },
  async created() {
    this.chosenCity = this.$store.getters.getCity;

    const posts = await this.$store.dispatch("post/fetchCanHelpPosts", null, {
      root: true
    });

    if (!posts) {
      this.state = "empty";
      return;
    }

    this.posts = posts;
    this.state = "";
  },
  components: {
    Card
  }
};
</script>
