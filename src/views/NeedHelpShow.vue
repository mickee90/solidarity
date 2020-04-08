<template>
  <div>
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
    <div class="content px-8">
      <div
        class="border-top bg-white border-gray-400 lg:flex lg:max-w-full max-w-sm rounded-lg overflow-hidden w-full"
      >
        <div
          class="flex flex-none h-48 items-center justify-center lg:h-auto lg:rounded-l lg:rounded-t-none lg:w-48 overflow-hidden rounded-t text-center"
        >
          <slot name="logo"
            ><font-awesome-icon icon="handshake" class="text-6xl"
          /></slot>
        </div>
        <div class="bg-white h-full justify-between leading-normal p-4 w-full">
          <h1 class="m-0 py-8">Havanna</h1>
        </div>
      </div>
      <div class="lg:flex lg:max-w-full max-w-sm overflow-hidden w-full">
        <div
          class="bg-white h-full justify-between leading-normal p-4 w-full border-bottom rounded-lg"
        >
          <div class="mb-8">
            <p class="text-gray-700 text-base">
              Kom och köp lunch hos oss! Erbjuder givetsvis take away till
              rabatterat pris.<br /><br />
              Vi erbjuder även sittningar för större sällskap i egna rum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
