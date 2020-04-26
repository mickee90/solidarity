<template>
  <div class="xxl:max-w-v-3/4 lg:max-w-v-9/10 mx-auto">
    <div
      class="min-h-v-1/4 items-center flex justify-around text-2xl"
      v-if="state === 'loading'"
    >
      Laddar..
    </div>
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
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div v-else class="content gap-2 grid grid-cols-2 px-8 xl:grid-cols-3">
      <!-- <Card
        :url="{
          name: 'NeedHelpShow',
          params: { city: $store.getters.getCity, postId: 1 },
        }"
      >
        <template slot="logo"></template>
        <template slot="header">Havanna</template>
        <template slot="ingress">
          Kom och köp lunch hos oss! Erbjuder givetsvis take away till
          rabatterat pris.
        </template>
      </Card>
      <Card
        :url="{
          name: 'NeedHelpShow',
          params: { city: $store.getters.getCity, postId: 2 },
        }"
      >
        <template slot="logo"></template>
        <template slot="header">Varbergs sjukhus</template>
        <template slot="ingress">
          Vi blir jätteglada av allt hembakat vi har fått det senaste, men vi
          får tyvärr inte ta emot det pga smittorisk.
          <br />Det allra bästa sättet för er att hjälpa oss är att lyssna på
          våra myndigheters råd för att undvika att bli sjuka och belasta våra
          resurser
        </template>
      </Card>
      <Card
        :url="{
          name: 'NeedHelpShow',
          params: { city: $store.getters.getCity, postId: 3 },
        }"
      >
        <template slot="logo"></template>
        <template slot="header">Ann Göransson</template>
        <template slot="ingress">
          Jag vågar inte gå till affären och skulle behöva hjälp att få hem
          maten två gånger i veckan
        </template>
      </Card>
      <Card
        :url="{
          name: 'NeedHelpShow',
          params: { city: $store.getters.getCity, postId: 4 },
        }"
      >
        <template slot="logo"></template>
        <template slot="header">Varbergs torg</template>
        <template slot="ingress">
          Vi lokala producenter behöver er hjälp! Kom till torget på lördag och
          köp frukt, grönt, korv och kläder! Vi har givetvis markerat upp för
          att hålla avståndet i köerna.
        </template>
      </Card>-->

      <Card
        v-for="[key, post] in Object.entries(posts)"
        :key="key"
        :url="{
          name: 'NeedHelpShow',
          params: { city: post.city, postId: key },
        }"
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
      chosenCity: "",
    };
  },
  methods: {
    onChosenCity() {
      if (this.chosenCity === "") return;

      this.$store.dispatch("setCity", this.chosenCity);

      this.$router.push({
        name: "NeedHelp",
        params: { city: this.chosenCity },
      });
    },
  },
  async created() {
    this.chosenCity = this.$store.getters.getCity;

    const posts = await this.$store.dispatch("post/fetchNeedHelpPosts", null, {
      root: true,
    });

    if (!posts) {
      this.state = "empty";
      return;
    }

    this.posts = posts;
    this.state = "";
  },
  components: {
    Card,
  },
};
</script>
