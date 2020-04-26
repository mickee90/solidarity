<template>
  <div class="xxl:max-w-v-3/4 lg:max-w-v-9/10 mx-auto">
    <div class="bg-white content max-w-screen-xl mx-auto pb-8 pr-8">
      <div
        class="min-h-v-1/4 items-center flex justify-around text-2xl"
        v-if="state === 'loading'"
      >
        Laddar..
      </div>
      <div
        class="min-h-v-1/4 items-center flex justify-around text-2xl"
        v-else-if="state === 'empty'"
      >
        Ingen information kunde hittas
      </div>
      <div
        v-else
        class="border-top bg-white border-gray-400 flex lg:max-w-full max-w-sm rounded-lg overflow-hidden w-full"
      >
        <div class="flex flex-col items-center justify-center w-1/4">
          <font-awesome-icon
            icon="handshake"
            class="fa-handshake fa-w-20 my-10 svg-inline--fa text-6xl"
          />
          <button
            class="btn btn-blue mb-4"
            v-if="post.phone !== ''"
            v-text="post.phone"
          ></button>
          <button
            class="btn btn-blue mb-4"
            v-if="post.email !== ''"
            v-text="post.email"
          ></button>
          <a
            href="#"
            target="_blank"
            class="mb-4"
            v-if="post.website !== ''"
            v-text="post.website"
          ></a>
        </div>
        <div class="p-4 text-left w-3/4">
          <h1 class="m-0 pb-8 pt-6" v-text="post.title"></h1>
          <div v-html="post.ingress" class="italic mb-5"></div>
          <div v-html="post.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      state: "loading",
    };
  },
  async created() {
    const post = await this.$store.dispatch(
      "post/fetchSinglePost",
      this.$router.history.current.params.postId
    );

    if (!post) {
      this.state = "empty";
      return;
    }

    this.post = post;
    this.state = "";
  },
};
</script>
