<template>
  <div
    class="border border-gray-400 lg:flex lg:max-w-full max-w-sm rounded-lg overflow-hidden w-full"
  >
    <div
      class="flex flex-none h-48 items-center justify-center lg:h-auto lg:rounded-l lg:rounded-t-none lg:w-48 overflow-hidden rounded-t text-center"
    >
      <slot name="logo"
        ><font-awesome-icon icon="handshake" class="text-6xl"
      /></slot>
    </div>
    <div class="bg-white p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">
          <slot name="header">Can coffee make you a better developer?</slot>
        </div>
        <p class="text-gray-700 text-base">
          <slot name="ingress">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.</slot
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
