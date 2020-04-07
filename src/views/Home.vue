<template>
  <div>
    <div id="nav" class="flex items-center justify-between">
      <div class="text-4xl font-bold">
        <a href="/" class="no-underline">Solidariteten</a>
      </div>
      <nav class="nav flex">
        <router-link :to="{ name: 'Register' }" class="ml-3"
          >Registrera dig</router-link
        >
        <router-link :to="{ name: 'AboutUs' }" class="ml-3"
          >Kontakta oss</router-link
        >
      </nav>
    </div>
    <div class="flex bg-white" style="height:600px;">
      <div
        class="flex items-center lg:text-left lg:w-1/2 md:px-8 px-8 text-center"
      >
        <div>
          <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
            Tillsammans gör vi skillnad!
          </h2>
          <p class="mt-2 text-sm text-gray-500 md:text-base">
            Många av oss behöver hjälp på ett eller annat sätt nu under dessa
            tider. <br />
            Men vi är också säkra på att många kan hjälpa till på något sätt,
            stort som smått. <br />
            Det kan t.ex. vara sponsring, köpa en take away lunch istället för
            den tråkiga matlådan, handla i matbutiken, uppträde, en pratstund
            över telefon eller videosamtal, osv. <br /><br />

            Möjligheterna är oändliga! Berätta hur ni kan hjälpa till, eller hur
            ni behöver hjälp.
          </p>

          <div class="py-8 flex">
            <div class="flex flex-1 justify-center m-auto py-8">
              <router-link class="btn btn-blue" :to="{ name: 'Register' }"
                >Registrera dig</router-link
              >
            </div>
            <div class="border-l-2 flex-1 grid justify-center p-4 py-8">
              <div class="relative">
                <select
                  @change="onChosenCity"
                  v-model="chosenCity"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option value="">Välj ort</option>
                  <option value="varberg">Varberg</option></select
                >
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
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hidden lg:block lg:w-1/2"
        style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
      >
        <div
          class="h-full object-cover"
          style="background-image: url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80)"
        >
          <div class="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      chosenCity: "",
    };
  },
  methods: {
    onChosenCity() {
      if (this.chosenCity === "") return;

      this.$router.push({
        name: "NeedHelp",
        params: { city: this.chosenCity },
      });
    },
  },
};
</script>
