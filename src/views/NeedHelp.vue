<template>
  <div>
    <div class="content gap-2 grid grid-cols-2 px-8 xl:grid-cols-3">
      <Card :url="{ name: 'NeedHelpShow', params: { postId: 1 } }">
        <template slot="logo"></template>
        <template slot="header">Havanna</template>
        <template slot="ingress"
          >Kom och köp lunch hos oss! Erbjuder givetsvis take away till
          rabatterat pris.</template
        >
      </Card>
      <Card :url="{ name: 'NeedHelpShow', params: { postId: 2 } }">
        <template slot="logo"></template>
        <template slot="header">Varbergs sjukhus</template>
        <template slot="ingress"
          >Vi blir jätteglada av allt hembakat vi har fått det senaste, men vi
          får tyvärr inte ta emot det pga smittorisk. <br />
          Det allra bästa sättet för er att hjälpa oss är att lyssna på våra
          myndigheters råd för att undvika att bli sjuka och belasta våra
          resurser
        </template>
      </Card>
      <Card :url="{ name: 'NeedHelpShow', params: { postId: 3 } }">
        <template slot="logo"></template>
        <template slot="header">Ann Göransson</template>
        <template slot="ingress"
          >Jag vågar inte gå till affären och skulle behöva hjälp att få hem
          maten två gånger i veckan</template
        >
      </Card>
      <Card :url="{ name: 'NeedHelpShow', params: { postId: 4 } }">
        <template slot="logo"></template>
        <template slot="header">Varbergs torg</template>
        <template slot="ingress"
          >Vi lokala producenter behöver er hjälp! Kom till torget på lördag och
          köp frukt, grönt, korv och kläder! Vi har givetvis markerat upp för
          att hålla avståndet i köerna.
        </template>
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
